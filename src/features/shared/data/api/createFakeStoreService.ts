import { createHttpClient, IHttpClient } from "./httpClient"
import { IPerformRequestParameters, IService } from "./IService"

export const createFakeStoreService = <T>(
  httpClient: IHttpClient = createHttpClient()
): IService<T> => {
  const performRequest = async ({
    method,
    endPoint,
    parameters,
  }: IPerformRequestParameters): Promise<T> =>
    httpClient<T>("https://fakestoreapi.com", endPoint, {
      method,
      parameters,
    })

  return performRequest
}
