export interface IPerformRequestParameters {
  method?: "GET" | "POST"
  endPoint: string
  parameters?: Record<string, string | number>
}

export type IService<T> = (parameters: IPerformRequestParameters) => Promise<T>
