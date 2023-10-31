declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MICROCMS_ORIGIN_URL: string
    }
  }
}

export {}