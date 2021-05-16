import { Json } from "./types";

export type ExtractRequestData<RequestData> = RequestData extends Endpoint<
  infer EndpointRequestData,
  unknown
>
  ? EndpointRequestData
  : never;

export type ExtractResponseData<ResponseData> = ResponseData extends Endpoint<
  unknown,
  infer EndpointResponseData
>
  ? EndpointResponseData
  : never;

export interface Endpoint<RequestData, ResponseData> {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
}

export type Endpoints<Api> = {
  [key in keyof Api]: Endpoint<
    ExtractRequestData<Api[keyof Api]>,
    ExtractResponseData<Api[keyof Api]>
  >;
};

export function endpoint<
  RequestData extends Json = {},
  ResponseData extends Json = {}
>(
  method: Endpoint<RequestData, ResponseData>["method"],
  url: Endpoint<RequestData, ResponseData>["url"]
): Endpoint<RequestData, ResponseData> {
  return { method, url };
}
