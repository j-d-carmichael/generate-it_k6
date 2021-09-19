import { Params, RequestBody } from 'k6/http';

export interface Request {
  method: string,
  url: string,
  body?: RequestBody | null,
  params?: Params | null
}
