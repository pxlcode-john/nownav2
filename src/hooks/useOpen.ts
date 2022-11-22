import { useState } from "react"

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return {
    isOpen,
    open,
    close,
  }
}

export default useOpen
