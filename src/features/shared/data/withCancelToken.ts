export interface ICancellablePromise<T> extends Promise<T> {
  cancel: () => void
}

export function withCancelToken<T>(
  request: Promise<T>,
  cancel: () => void
): ICancellablePromise<T> {
  const promise: Partial<ICancellablePromise<T>> = request

  promise.cancel = () => {
    cancel()
  }

  return request as ICancellablePromise<T>
}
