// lib imports
import {
  useState,
  useEffect,
  useCallback,
} from "react"


// Hook to fetch Data
export function useFetchData(url){
  const [ stateData, setStateData ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const apiCall = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()

    setTimeout(() => {
      setLoading(false)
      setStateData(data)
    }, 2000)

  }, [url])

  useEffect(() => {
    apiCall()
  },[url,apiCall])

  return { stateData, loading }
}
