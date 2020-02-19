import React, { useState, ReactNode, useContext, createContext } from 'react'

type CanSetState = (value: number) => void

const CountState = createContext<number | undefined>(undefined)
const SetState = createContext<CanSetState | undefined>(undefined)

const CountProvider = ({ children }: any) => {
  const [state, setCount] = useState(0)
  return (
    <CountState.Provider value={state}>
      <SetState.Provider value={setCount}>{children}</SetState.Provider>
    </CountState.Provider>
  )
}

const useCountState = () => {
  const context = useContext(CountState)

  if (context === undefined) {
    throw new Error(`CountState must be used inside a CountProvider`)
  }

  return context
}

const useSetCount = () => {
  const context = useContext(SetState)

  if (context === undefined) {
    throw new Error(`CountState must be used inside a CountProvider`)
  }

  return context
}

export { CountProvider, useCountState, useSetCount }
