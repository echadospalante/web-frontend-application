export interface ApiResponse<T> {
  ok: boolean;
  message: T;
}