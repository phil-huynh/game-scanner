import './App.css'
import BarCodeScanner from './Scanner'
import GameDataDisplay from './GameDataDisplay'
import Menu from './Menu'
import Search from './Search'
import { useStore } from './ContextStore'

function App() {

  const { currentGame, page } = useStore()

  if (page==='menu') {
    return <Menu/>
  }
  if (page==='scanner') {
    return <>{currentGame ? <GameDataDisplay/> : <BarCodeScanner/>}</>
  }
  if (page==='search') {
    return <>{currentGame ? <GameDataDisplay/> : <Search/>}</>
  }
}

export default App
