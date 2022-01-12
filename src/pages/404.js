import { navigate } from "gatsby"
import { useEffect } from "react"
export const ErrorPage = () => {
  useEffect(() => {
    navigate("/")
  }, [])
  return null
}
export default ErrorPage
