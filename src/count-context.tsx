import React, { useReducer, createContext, useContext, ReactNode } from 'react'

interface Action {
  type: 'increment' | { type: 'decrement' }
}
type Dispatch = (action: Action) => void
interface State {
  count: number
}
interface CountProviderProps {
  children: ReactNode
}

// These are Generics so you can define types here and override the default value
const CountStateContext = createContext<State | undefined>(undefined)
const CountDispatchContext = createContext<Dispatch | undefined>(undefined)

const countReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 }
    }
    case 'decrement': {
      return { count: state.count - 1 }
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// Check App for how this is used
const CountProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  return (
    <CountDispatchContext.Provider value={dispatch}>
      <CountStateContext.Provider value={state}>
        {children}
      </CountStateContext.Provider>
    </CountDispatchContext.Provider>
  )
}

/**
 *  This block allows you to use context like this: 
 * 
```ts
const SomeComponent = () => {
   const something = useSomething()
 }

// rather than: 

const SomeComponent = () => {
  const something = useContext(SomethingContext)
} 
```
 */

const useCountState = () => {
  const context = useContext(CountStateContext)

  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

const useCountDispatch = () => {
  const context = useContext(CountDispatchContext)

  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

export { CountProvider, useCountDispatch, useCountState }
