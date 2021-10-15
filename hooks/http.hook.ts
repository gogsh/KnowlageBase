import { useState, useCallback } from 'react'
import * as Http from '../types/Http.types'

export const useHttp: Http.UseHttp = () => {
  const [loading, setLoading] = useState<Http.Loading>(false)
  const [error, setError] = useState<Http.Error>(null)

  const request: Http.Request = useCallback(
    async (url, method: Http.Method = 'GET', body = null, headers = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, { method, body, headers })
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.message || 'Что-то пошло не так')
        }
        setLoading(false)
        return data
      } catch (e) {
        setLoading(false)
        setError(e.message)
        throw e
      }
    },
    []
  )

  const clearError: Http.ClearError = () => setError(null)

  return { loading, request, error, clearError }
}
