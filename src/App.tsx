import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  useSetCount,
  useCountState,
  CountProvider
} from './count-context-state'

const CountDisplay = () => {
  const count = useCountState()
  return <div className="">Current count is: {count}</div>
}

const IncrementCount = () => {
  const count = useCountState()
  const setState = useSetCount()
  return <button onClick={() => setState(count + 1)}>Add to Counter</button>
}

const App = () => {
  return (
    <CountProvider>
      <CountDisplay></CountDisplay>
      <IncrementCount></IncrementCount>
    </CountProvider>
  )
}


/**
 * With a reducer
 */

// import { CountProvider, useCountDispatch, useCountState } from './count-context'
// const CountDisplay = () => {
//   console.log(useCountDispatch())
//   const { count } = useCountState()
//   return <div className="">{`The current count is ${count}`}</div>
// }

// const Counter = () => {
//   const dispatch = useCountDispatch()
//   return (
//     <button onClick={() => dispatch({ type: 'increment' })}>
//       Increment Count
//     </button>
//   )
// }

// function App() {
//   return (20.58
//     <div className="App">
//       <header className="App-header">
//         <CountProvider>
//           <CountDisplay></CountDisplay>
//           <Counter></Counter>
//         </CountProvider>
//       </header>
//     </div>
//   )
// }

export default App
