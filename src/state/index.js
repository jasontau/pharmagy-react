import React, { createContext, useContext, useReducer } from "react"
import initialState from "./initialstate"
import reducer from "./reducer"

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const value = useReducer(reducer, initialState)
  const [state, dispatch] = value

  const dispatchMiddleware = async action => {
    if (typeof action === "function") {
      action(dispatch)
    } else {
      dispatch(action)
    }
  }

  return (
    <StateContext.Provider value={[state, dispatchMiddleware]}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext)
