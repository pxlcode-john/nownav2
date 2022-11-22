import { useContext } from "react"
import { AdminContext, ActionTypes } from "providers/AdminProvider"


export const useAdminManager = () => {
  const { dispatch, state } = useContext(AdminContext)

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