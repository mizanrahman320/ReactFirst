import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/CardList'
import CardProps from './Component/CardProps'
import CardClass from './Component/CardClass'
import State from './Component/State'
import Index from './Component/Conditional/index'
import EventEx from './Component/EventHandling/EventEx'
import EventBind from './Component/EventBinding/EventBind'
import ReactHook from './Component/React_Hook'
import EventBub from './Component/EventBubbling/EventBub'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Card/>
      <h1>**********************************</h1>
      <CardProps name="This is Mizan" description="hello desc"/>
      <h1>**********************************</h1>
      <CardClass name="This is class"/>
      <h1>**********************************</h1>
      <State/>
      <h1>**********************************</h1>
      <Index/>
      <h1>**************EventEx********************</h1>
      <EventEx/>
      <h1>**************EventBind********************</h1>
      <EventBind/>
      <h1>**********************************</h1>
      <ReactHook/>
      <h1>**********************************</h1>
      <EventBub/>
    </>
  )
}

export default App
