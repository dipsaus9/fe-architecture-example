export interface IPerformRequestParameters {
  method?: "GET" | "POST"
  endPoint: string
  parameters?: Record<string, string | number>
}

export interface IService<T> {
  performRequest: (parameters: IPerformRequestParameters) => Promise<T>
}
