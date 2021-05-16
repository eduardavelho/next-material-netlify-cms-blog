import axios, {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosResponse,
  AxiosError,
} from "axios";
import {
  ExtractRequestData,
  ExtractResponseData,
  Endpoint,
  Endpoints,
} from "./endpoint";
import { Json } from "./types";

export type AxiosClient<RequestData, ResponseData> = (
  requestData: RequestData,
  config?: AxiosRequestConfig
) => AxiosPromise<ResponseData>;

export type AxiosClients<Api> = {
  [key in keyof Api]: AxiosClient<
    ExtractRequestData<Api[key]>,
    ExtractResponseData<Api[key]>
  >;
};

function getAxiosInstance<RequestData, ResponseData>(
  method: Endpoint<RequestData, ResponseData>["method"]
) {
  switch (method) {
    case "GET":
      return axios.get;
    case "POST":
      return axios.post;
    case "PUT":
      return axios.put;
    case "PATCH":
      return axios.patch;
    case "DELETE":
      return axios.delete;
  }
}

function requestDataToUrl<RequestData extends Json>(
  url: string,
  requestData: RequestData
) {
  return url
    .split("/")
    .map((substring) => substring.match(/\[([^\)]+)\]/))
    .filter((substring) => substring)
    .reduce((newUrl, substring) => {
      const urlKey = (substring ?? [])[0];
      const key = ((substring ?? [])[1] ?? "").replace(
        "...",
        ""
      ) as keyof RequestData;

      const partialUrl = (() => {
        if (typeof requestData[key] === "string") {
          return newUrl.replace(urlKey, requestData[key] as any);
        } else if (urlKey.startsWith("[...")) {
          return newUrl.replace(urlKey, (requestData[key] as any).join("/"));
        } else {
          return newUrl.replace(urlKey, "");
        }
      })();
      requestData && delete requestData[key];
      console.log(requestData);
      return partialUrl;
    }, url);
}

function mapEndpointToAxiosClient<
  RequestData extends Json,
  ResponseData extends Json
>({
  endpoint,
  beforeRequest,
  afterRequest,
  onError,
}: {
  endpoint: Endpoint<RequestData, ResponseData>;
  beforeRequest: (
    config: AxiosRequestConfig
  ) => Promise<AxiosRequestConfig | void>;
  afterRequest: (response: AxiosResponse<unknown>) => Promise<void>;
  onError: (error: AxiosError<unknown>) => Promise<void>;
}): AxiosClient<RequestData, ResponseData> {
  const axiosInstance = getAxiosInstance(endpoint.method);
  return async (requestData: RequestData, config) => {
    const data = ["POST", "PUT", "PATCH"].includes(endpoint.method)
      ? requestData
      : {
          ...((await beforeRequest(config ?? {})) ?? {}),
          params: requestData,
          ...config,
        };

    const composedConfig = ["POST", "PUT", "PATCH"].includes(endpoint.method)
      ? {
          ...((await beforeRequest(config ?? {})) ?? {}),
          ...config,
        }
      : undefined;

    try {
      const response = await axiosInstance<ResponseData>(
        requestDataToUrl(endpoint.url, requestData),
        data,
        composedConfig
      );
      await afterRequest(response);
      return response;
    } catch (error: unknown) {
      await onError(error as AxiosError<unknown>);
      return (error as AxiosError<ResponseData>)
        .response as AxiosResponse<ResponseData>;
    }
  };
}

export function getAxiosClient<Api extends Endpoints<Api>>({
  endpoints,
  beforeRequest = async () => {},
  afterRequest = async () => {},
  onError = async () => {},
}: {
  endpoints: Api;
  beforeRequest?: (
    config: AxiosRequestConfig
  ) => Promise<AxiosRequestConfig | void>;
  afterRequest?: (response: AxiosResponse<unknown>) => Promise<void>;
  onError?: (error: AxiosError<unknown>) => Promise<void>;
}) {
  return Object.keys(endpoints).reduce(
    (apiRoutes, endpoint) => ({
      ...apiRoutes,
      [endpoint]: mapEndpointToAxiosClient({
        endpoint: endpoints[endpoint as keyof Api],
        beforeRequest,
        afterRequest,
        onError,
      }),
    }),
    {} as AxiosClients<Api>
  );
}
