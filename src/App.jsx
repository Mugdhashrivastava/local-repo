import { useState } from 'react'
import Form from './assets/components/Form'
import './App.css'
import Display from './assets/components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form />
    <Display />
    </>
  )
}

export default App
