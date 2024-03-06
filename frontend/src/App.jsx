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
    return <>{!currentGame && <BarCodeScanner/>}</>
  }
  if (page==='search') {
    return <>{!currentGame && <Search/>}</>
  }
  if (page==='display') {
    return <>{currentGame && <GameDataDisplay/>}</>
  }
}

export default App
