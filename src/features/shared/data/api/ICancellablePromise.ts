export interface ICancellablePromise<T> extends Promise<T> {
  cancel: () => void
}
