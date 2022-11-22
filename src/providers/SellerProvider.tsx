import React, { createContext, Dispatch, useReducer } from "react"
import { ActionMap } from "types"

export const initialState: iState = {
  sidebarOpen: false,
}

export const SellerContext = createContext<{ state: iState; dispatch: Dispatch<Actions> }>({
  state: initialState,
  dispatch: () => null,
})

export const SellerProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SellerContext.Provider value={{ state, dispatch }}>{children}</SellerContext.Provider>
}

export interface iState {
  sidebarOpen: boolean
}

export enum ActionTypes {
  SET_SIDEBAR_OPEN = "SET_SIDEBAR_OPEN",
}

type Payload = {
  [ActionTypes.SET_SIDEBAR_OPEN]: boolean
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>]

const reducer = (state: iState, action: Actions): iState => {
  switch (action.type) {
    case ActionTypes.SET_SIDEBAR_OPEN:
      return {
        ...state,
        sidebarOpen: action.payload,
      }
    default:
      return initialState
  }
}
