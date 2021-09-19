import { Params, RequestBody } from 'k6/http';
import { HTTPMethod } from '@/enums/HTTPMethod';

export interface Request {
  method: HTTPMethod,
  url: string,
  body?: RequestBody | null,
  params?: Params | null
}
