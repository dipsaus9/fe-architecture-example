import { createHttpClient } from "./httpClient"
import { IService } from "./IService"

const fakeStoreClient = createHttpClient("https://fakestoreapi.com")

export function createFakeStoreService(): IService {
  return {
    get({ endPoint, parameters }) {
      return fakeStoreClient.get(endPoint, parameters)
    },
    post({ endPoint, body }) {
      return fakeStoreClient.post(endPoint, {
        body,
      })
    },
    cancel() {
      fakeStoreClient.cancel()
    },
  }
}
