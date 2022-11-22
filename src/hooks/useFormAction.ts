import { useRef } from "react"

export const useFormAction = <T = any>() => {
  const submit = useRef<HTMLButtonElement>(null)

  const onSubmit = () => submit.current && submit.current.click()

  const onSuccess = (payload: T) => {}

  const onError = (error: any) => {}

  return {
    ref: submit,
    onSubmit,
    onSuccess,
    onError,
  }
}

export default useFormAction
