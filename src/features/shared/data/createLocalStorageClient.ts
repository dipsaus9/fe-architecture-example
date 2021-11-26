export function createStorageClient(
  key: string,
  storageKey: "localStorage" | "sessionStorage" = "localStorage"
) {
  const storage = window[storageKey]

  return {
    get<T>() {
      const response = storage.getItem(key)

      if (response) {
        return JSON.parse(response) as T
      }

      return null
    },
    set<D>(body: D) {
      try {
        return storage.setItem(key, JSON.stringify(body))
      } catch {
        return undefined
      }
    },
    delete() {
      return storage.removeItem(key)
    },
  }
}

export type IStorageClient = ReturnType<typeof createStorageClient>
