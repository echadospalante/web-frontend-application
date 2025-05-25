import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import ImageUploadApi from '../api/http/image-upload.api';

const useUploadImage = () => {
  const [uploadResultUrl, setUploadResultUrl] = useState('');

  const uploadVentureImageMutation = useMutation({
    mutationFn: (data: {
      file: File;
      type: 'ventures' | 'events' | 'publication';
    }) => ImageUploadApi.uploadImage(data.file, data.type),
    onSuccess: (data) => {
      console.log('Image uploaded successfully', data);
      setUploadResultUrl(data);
    },
  });

  const uploadVentureImage = (file: File) => {
    uploadVentureImageMutation.mutate({ file, type: 'ventures' });
  };

  const uploadEventImage = (file: File) => {
    uploadVentureImageMutation.mutate({ file, type: 'events' });
  };

  const uploadPublicationImage = (file: File) => {
    uploadVentureImageMutation.mutate({ file, type: 'publication' });
  };

  return {
    uploadVentureImage,
    uploadEventImage,
    uploadPublicationImage,
    uploadResultUrl,
    isLoading: uploadVentureImageMutation.isPending,
    isError: uploadVentureImageMutation.isError,
    error: uploadVentureImageMutation.error,
    isSuccess: uploadVentureImageMutation.isSuccess,
    retryUpload: uploadVentureImageMutation.reset,
  };
};

export default useUploadImage;
