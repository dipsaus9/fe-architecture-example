import { useState, useEffect } from "react"

export function useStore<T, S>(
  loader: () => Promise<T>,
  mapper: (response: T) => S
): {
  isLoading: boolean
  data: S | null
} {
  const [data, setData] = useState<S | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loader().then((response) => {
      setData(mapper(response))
      setIsLoading(false)
    })
  }, [loader, mapper])

  return {
    isLoading,
    data,
  }
}
