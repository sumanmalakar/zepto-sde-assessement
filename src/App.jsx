import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AutoCompleteChips from './AutoCompleteChips'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <AutoCompleteChips />
      </div>
      
    </>
  )
}

export default App
