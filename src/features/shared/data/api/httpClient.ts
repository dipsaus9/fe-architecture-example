import axios, { AxiosRequestConfig } from "axios"

import { withCancelToken } from "./withCancelToken"

export function createHttpClient(baseURL: string) {
  return {
    get<T, D = any>(endPoint: string, config?: AxiosRequestConfig<D>) {
      const controller = new AbortController()
      const { signal } = controller

      const promise = axios
        .get<T>(endPoint, {
          ...config,
          baseURL,
          signal,
        })
        .then((response) => response.data)

      return withCancelToken(promise, controller.abort)
    },
    post<T, D = any>(
      endPoint: string,
      body: D,
      config?: AxiosRequestConfig<D>
    ) {
      const controller = new AbortController()
      const { signal } = controller

      const promise = axios
        .post<T>(endPoint, body, {
          ...config,
          baseURL,
          signal,
        })
        .then((response) => response.data)

      return withCancelToken(promise, controller.abort)
    },
  }
}

export type IHttpClient = ReturnType<typeof createHttpClient>
