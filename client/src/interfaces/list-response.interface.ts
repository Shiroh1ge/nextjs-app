export interface ListResponse<T> {
  total: number;
  count: number;
  data: T[];
}
