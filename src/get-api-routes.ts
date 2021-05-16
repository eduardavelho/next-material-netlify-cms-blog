import type {
  NextApiRequest as BaseNextApiRequest,
  NextApiResponse,
} from "next";
import {
  ExtractRequestData,
  ExtractResponseData,
  Endpoint,
  Endpoints,
} from "./endpoint";

export interface NextApiRequest<RequestData, ResponseData>
  extends BaseNextApiRequest {
  body: RequestData;
  params: RequestData;
  method: Endpoint<RequestData, ResponseData>["method"];
}

export type ApiRoute<RequestData, ResponseData> = (
  callback: (
    requestData: RequestData,
    request: NextApiRequest<RequestData, ResponseData>,
    response: NextApiResponse
  ) => Promise<ResponseData>
) => (
  request: NextApiRequest<RequestData, ResponseData>,
  response: NextApiResponse<ResponseData>
) => Promise<void>;

export type ApiRoutes<Api> = {
  [key in keyof Api]: ApiRoute<
    ExtractRequestData<Api[key]>,
    ExtractResponseData<Api[key]>
  >;
};

function mapEndpointToApiRoute<RequestData, ResponseData>(
  endpoint: Endpoint<RequestData, ResponseData>
): ApiRoute<RequestData, ResponseData> {
  return (callback) => async (request, response) => {
    if (request.method === endpoint.method) {
      response
        .status(200)
        .json(
          await callback(
            { ...request.query, ...request.body },
            request,
            response
          )
        );
    }
  };
}

export function getApiRoutes<Api extends Endpoints<Api>>(endpoints: Api) {
  return Object.keys(endpoints).reduce(
    (apiRoutes, endpoint) => ({
      ...apiRoutes,
      [endpoint]: mapEndpointToApiRoute(
        endpoints[endpoint as keyof typeof endpoints]
      ),
    }),
    {} as ApiRoutes<Api>
  );
}
