import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useParams } from 'react-router-dom';
import { addPublicationClap, addPublicationComment } from '../../../../config/redux/reducers/principal/publications.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import ClapsApi from '../api/claps.api';
import CommentsApi from '../api/comments.api';
import { useState } from 'react';

const usePublicationInteractions = () => {
  const { publicationId } = useParams();
  const queryClient = useQueryClient()
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
    }
  });
  
  const saveClapMutation = useMutation({
    mutationKey: ['publication', publicationId, 'saveClap'],
    mutationFn: () =>
      ClapsApi.createClap(publicationId!),
    onSuccess: (data) => {
      dispatch(addPublicationClap(data));
      queryClient.invalidateQueries({
        queryKey: ['publications', publicationId],
      });
      setNewComment('');
    }
  });

  const handlePublishComment = (comment: string) => {
    if (!publicationId) {
      return;
    }
    saveCommentMutation.mutate(comment);
  }
  
  const handlePublishClap = () => {
    if (!publicationId) {
      return;
    }
    saveClapMutation.mutate();
  }

  return {
    handlePublishComment,
    handlePublishClap,
    isCommentLoading: saveCommentMutation.isPending,
    isClapLoading: saveClapMutation.isPending,

    isCommentError: saveCommentMutation.isError,
    isClapError: saveClapMutation.isError,

    isCommentSuccess: saveCommentMutation.isSuccess,
    isClapSuccess: saveClapMutation.isSuccess,

    retryComment: () => saveCommentMutation.reset(),
    retryClap: () => saveClapMutation.reset(),

    newComment,
    setNewComment,
  };
};

export default usePublicationInteractions;
