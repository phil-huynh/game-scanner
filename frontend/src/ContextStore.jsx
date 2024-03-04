import { useState, useContext, createContext } from 'react'

const ContextStore = createContext(null);

export default function ContextProvider ({ children }) {

  const [scanResult, setScanResult] = useState(null)
  const [currentGame, setCurrentGame] = useState(null)

  const clear = () => {
    setScanResult(null)
    setCurrentGame(null)
  }

  const store = {
    scanResult: scanResult,
    currentGame: currentGame,
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


