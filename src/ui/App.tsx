import { useState } from 'react'
import './App.css'
import { cn } from './lib/utils'
import ItemList from './views/ItemList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ItemList />
    </div>
  )
}

export default App
