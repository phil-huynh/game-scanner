import './App.css'
import BarCodeScanner from './Scanner'
import GameDataDisplay from './GameDataDisplay'
import Menu from './Menu'
import { useStore } from './ContextStore'
import Search from './Search'

function App() {

  const {currentGame, page, setPage} = useStore()

  if (page==='menu') {
    return <Menu/>
  }

  if (page==='scanner') {
    return (
      <>
        {currentGame ? <GameDataDisplay/> : <BarCodeScanner/>}
      </>
    )
  }

  if (page==='search') {
    return (
      <>
        {currentGame ? <GameDataDisplay/> : <Search/>}
      </>
    )
  }

}

export default App
