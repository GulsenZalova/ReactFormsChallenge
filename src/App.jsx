import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header/>
    </div>
  )
}

export default App
