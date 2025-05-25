import axios from 'axios';

import env from '../../../../../../environment/environment';

class ImageUploadApi {
  private static readonly BASE_URL = `${env.API_URL}/api/v1/__type__/cover-photo`;

  public static uploadImage(
    file: File,
    type: 'ventures' | 'events' | 'publication',
  ) {
    const formData = new FormData();
    formData.append('file', file);
    return axios
      .post(this.BASE_URL.replace('__type__', type), formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(({ data }) => data.data.imageUrl);
  }
}

export default ImageUploadApi;
