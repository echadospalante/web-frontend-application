import axios from 'axios';
import { PublicationComment, VenturePublication } from 'echadospalante-domain';


export default class CommentsApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/publications`;

  public static async createComment(
    publicationSlug: string,
    comment: string,
  ): Promise<PublicationComment> {
    return axios
      .post<PublicationComment>(
        `${this.BASE_URL}/${publicationSlug}/comments`,
        { content: comment },
        { withCredentials: true },
      )
      .then(({ data }) => data);
  }

  public static deleteComment(
    publicationId: string,
    commentId: string,
  ): Promise<void> {
    return axios
      .delete(`${this.BASE_URL}/${publicationId}/comments/${commentId}`, {
        withCredentials: true,
      })
      .then(() => {});
  }
}