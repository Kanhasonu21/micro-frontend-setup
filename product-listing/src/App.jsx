import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeaturedProducts from './components/FeaturedProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FeaturedProducts/>
    </>
  )
}

export default App
