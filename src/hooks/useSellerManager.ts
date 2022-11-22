import { useContext } from "react"
import { SellerContext, ActionTypes } from "providers/SellerProvider"


export const useSellerManager = () => {
  const { dispatch, state } = useContext(SellerContext)

  const setSidebarOpen = (value: boolean) =>
    dispatch({
      type: ActionTypes.SET_SIDEBAR_OPEN,
      payload: value,
    })

  return {
    sidebarOpen: state.sidebarOpen,
    setSidebarOpen
  }
}

export default useSellerManager