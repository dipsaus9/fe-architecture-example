import axios from "axios"

export function createHttpClient(baseURL: string) {
  const controller = new AbortController()
  const { signal } = controller

  return {
    get<T>(endPoint: string, parameters?: Record<string, string | number>) {
      return axios
        .get<T>(endPoint, {
          baseURL,
          params: parameters,
          signal,
        })
        .then((response) => response.data)
    },
    post<T>(
      endPoint: string,
      body: {
        [key: string]: any
      }
    ) {
      return axios
        .post<T>(endPoint, body, {
          baseURL,
          signal,
        })
        .then((response) => response.data)
    },
    cancel() {
      controller.abort()
    },
  }
}

export type IHttpClient = ReturnType<typeof createHttpClient>
