import { useState, useContext, createContext } from 'react'

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [scanResult, setScanResult] = useState(null)
  const [currentGame, setCurrentGame] = useState(null)
  const [page, setPage] = useState('menu')
  const [selectedConsole, setSelectedConsole] = useState(null)
  const [gameList, setGameList] = useState(null)
  const [selectedGame, setSelectedGame] = useState(null)

  const clear = () => {
    setScanResult(null)
    setCurrentGame(null)
    setSelectedConsole(null)
    setGameList(null)
    setSelectedGame(null)
  }


  const getGameByUPC = async (upc) => {
    const response = await fetch(`http://localhost:8000/game?upc=${upc}`)
    if (response.ok) {
      const data = await response.json()
      setCurrentGame(data.doc)
    } else {
      console.log("it didn't work")
    }
  }

  const getGameByPCID = async (id) => {
    const response = await fetch(`http://localhost:8000/game?pcID=${id}`)
    if (response.ok) {
      const data = await response.json()
      setCurrentGame(data.doc)
    } else {
      console.log("it didn't work")
    }
  }

  const getGamesForSystem = async (system) => {
    const response = await fetch(`http://localhost:8000/systemGames?system=${system}`)
    if (response.ok) {
      const data = await response.json()
      setGameList(data.gameList)
    } else {
      console.log("it didn't work")
    }
  }


  const store = {
    scanResult: scanResult,
    currentGame: currentGame,
    gameList: gameList,
    page: page,
    selectedConsole: selectedConsole,
    selectedGame: selectedGame,
    getGameByUPC: getGameByUPC,
    getGameByPCID: getGameByPCID,
    getGamesForSystem: getGamesForSystem,
    setScanResult: setScanResult,
    setCurrentGame: setCurrentGame,
    setGameList: setGameList,
    setSelectedGame: setSelectedGame,
    setPage: setPage,
    setSelectedConsole: setSelectedConsole,
    clear: clear
  }

  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)


