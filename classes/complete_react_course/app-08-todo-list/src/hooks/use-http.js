import { useState } from "react"

const useHttp = (requestConfig, applyData) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendRequest = async () => {
      setLoading(true)
        setError(null)
    
        try {
          const response = await fetch(requestConfig.url, {
            method: requestConfig.method ?? 'GET',
            headers: requestConfig.headers ?? {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
          })
    
          if (!response.ok) {
            throw new Error('Request failed...')
          }

          const data = await response.json()

          applyData(data)
    
        } catch (error) {
          setError(error.message || 'Something went wrong...')
        }
    
        setLoading(false)
  }

  return {
    loading,
    error,
    sendRequest
  }

}

export default useHttp