import { Provider } from 'jotai'
import './App.css'
import LayoutSelector from './views/LayoutSelector'

export default function App() {

  return (
    <Provider>
      <LayoutSelector />
    </Provider>
  )
}
