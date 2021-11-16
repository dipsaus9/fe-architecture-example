export interface IPerformRequestGetParameters {
  endPoint: string
  parameters?: Record<string, string | number>
}

export interface IPerformRequestPostParameters {
  endPoint: string
  body: {
    [key: string]: any
  }
}

export type IService = {
  get: <T>(parameters: IPerformRequestGetParameters) => Promise<T>
  post: <T>(parameters: IPerformRequestPostParameters) => Promise<T>
  cancel: () => void
}
