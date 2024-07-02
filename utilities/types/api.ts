export interface PaginationResponse {
  data: Array<Record<string, unknown>>;
  pagination: {
    limit: number;
    page: number;
    totalRows: string;
    totalPages: number;
  };
}

export interface PaginationParams {
  limit?: number;
  page?: number;
  sort?: string;
  dir?: "DESC" | "ASC";
  filter?: string;
  query?: string;
}
//
