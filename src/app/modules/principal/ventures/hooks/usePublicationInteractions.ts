import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import {
  addPublicationClap,
  addPublicationComment,
  deletePublicationClap,
  deletePublicationComment,
} from '../../../../config/redux/reducers/principal/publications.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import ClapsApi from '../api/claps.api';
import CommentsApi from '../api/comments.api';

const usePublicationInteractions = () => {
  const { publicationId } = useParams();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const [newComment, setNewComment] = useState('');

  const saveCommentMutation = useMutation({
    mutationKey: ['publication', publicationId, 'saveComment'],
    mutationFn: (comment: string) =>
      CommentsApi.createComment(publicationId!, comment),
    onSuccess: (data) => {
      dispatch(addPublicationComment(data));
      queryClient.invalidateQueries({
        queryKey: ['publications', publicationId],
      });
      setNewComment('');
    },
  });

  const deleteCommentMutation = useMutation({
    mutationKey: ['publication', publicationId, 'deleteComment'],
    mutationFn: (commentId: string) =>
      CommentsApi.deleteComment(publicationId!, commentId),
    onSuccess: (_, commentId) => {
      dispatch(deletePublicationComment(commentId));
      queryClient.invalidateQueries({
        queryKey: ['publications', publicationId],
      });
    },
  });

  const saveClapMutation = useMutation({
    mutationKey: ['publication', publicationId, 'saveClap'],
    mutationFn: () => ClapsApi.createClap(publicationId!),
    onSuccess: (data) => {
      dispatch(addPublicationClap(data));
      queryClient.invalidateQueries({
        queryKey: ['publications', publicationId],
      });
    },
  });

  const deleteClapMutation = useMutation({
    mutationKey: ['publication', publicationId, 'deleteClap'],
    mutationFn: (clapId: string) => ClapsApi.deleteClap(publicationId!, clapId),
    onSuccess: (_, clapId: string) => {
      dispatch(deletePublicationClap(clapId));
      queryClient.invalidateQueries({
        queryKey: ['publications', publicationId],
      });
    },
  });

  const handlePublishComment = (comment: string) => {
    if (!publicationId) return;
    saveCommentMutation.mutate(comment);
  };

  const handleDeleteComment = (commentId: string) => {
    if (!publicationId) return;
    deleteCommentMutation.mutate(commentId);
  };

  const handlePublishClap = () => {
    if (!publicationId) return;
    saveClapMutation.mutate();
  };

  const handleDeleteClap = (clapId: string) => {
    if (!publicationId) return;
    deleteClapMutation.mutate(clapId);
  };

  return {
    handlePublishComment,
    handlePublishClap,
    handleDeleteClap,
    handleDeleteComment,
    isCommentLoading: saveCommentMutation.isPending,
    isClapLoading: saveClapMutation.isPending,
    isDeleteClapLoading: deleteClapMutation.isPending,

    isCommentError: saveCommentMutation.isError,
    isClapError: saveClapMutation.isError,
    isDeleteClapError: deleteClapMutation.isError,

    isCommentSuccess: saveCommentMutation.isSuccess,
    isClapSuccess: saveClapMutation.isSuccess,
    isDeleteClapSuccess: deleteClapMutation.isSuccess,

    retryComment: () => saveCommentMutation.reset(),
    retryClap: () => saveClapMutation.reset(),
    retryDeleteClap: () => deleteClapMutation.reset(),

    newComment,
    setNewComment,
  };
};

export default usePublicationInteractions;
