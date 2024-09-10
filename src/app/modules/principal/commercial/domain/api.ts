export interface ApiResponse<T> {
  ok: boolean;
  message: T;
}

export interface PaginatedBody<I> {
  total: number;
  items: I[];
}
