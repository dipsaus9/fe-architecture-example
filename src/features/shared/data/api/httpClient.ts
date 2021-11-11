import axios from "axios"

import { log } from "@/helpers/log"

export interface IRequestConfig {
  method?: "GET" | "POST"
  parameters?: Record<string, string | number>
}

export const createHttpClient =
  () =>
  <T>(
    basePath: string,
    endPoint: string,
    requestConfig: IRequestConfig = {}
  ): Promise<T> => {
    const promise = axios({
      method: requestConfig.method || "GET",
      baseURL: basePath,
      url: endPoint,
      params: requestConfig.parameters,
      validateStatus: () => true,
    }).then((response) => response.data)

    promise.catch((error) => {
      log(error)
    })

    return promise
  }

export type IHttpClient = ReturnType<typeof createHttpClient>
