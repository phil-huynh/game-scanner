import { useState, useContext, createContext } from 'react'

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [scanResult, setScanResult] = useState(null)
  const [currentGame, setCurrentGame] = useState(null)

  const clear = () => {
    setScanResult(null)
    setCurrentGame(null)
  }


  const getGameByUPC = async (upc) => {
    const response = await fetch(`http://localhost:8000/game?upc=${upc}`)
    if (response.ok) {
      const data = await response.json()
      console.log(data.doc)
      setCurrentGame(data.doc)
    } else console.log("it didn't work")
  }

  const store = {
    scanResult: scanResult,
    currentGame: currentGame,
    getGameByUPC: getGameByUPC,
    setScanResult: setScanResult,
    setCurrentGame: setCurrentGame,
    clear: clear
  }

  return (
    <ContextStore.Provider value={store}>
      {children}
    </ContextStore.Provider>
  )
}

export const useStore = () => useContext(ContextStore)


