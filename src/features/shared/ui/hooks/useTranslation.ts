export type Translate = (key: string) => string

export function useTranslation() {
  const t: Translate = (key) => key

  return {
    t,
  }
}
