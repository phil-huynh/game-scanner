import { useState, useEffect } from 'react'
import './App.css'
import BarCodeScanner from './Scanner'
import { useStore } from './ContextStore'

function App() {


  const {scanResult, setScanResult, currentGame, setCurrentGame, clear} = useStore()
  // const [scanResult, setScanResult] = useState(null)
  // const clear = () => {
  //   setScanResult(null)
  //   setCurrentGame(null)
  // }
  // const [currentGame, setCurrentGame] = useState(null)

  return (
    <>

      {currentGame ?
        <>
        <div>{`Success: ${scanResult}`}</div>
        <h4>{`Game: ${currentGame.productName ? currentGame.productName : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`Genre: ${currentGame.genre ? currentGame.genre : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`Console: ${currentGame.consoleName ? currentGame.consoleName : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`Box Only Price: ${currentGame.boxOnlyPrice ? currentGame.boxOnlyPrice : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`CIB Price: ${currentGame.cibPrice ? currentGame.cibPrice : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`Gamestop Price: ${currentGame.gamestopPrice ? currentGame.gamestopPrice : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`Gamestop Trade Price: ${currentGame.gamestopTradePrice ? currentGame.gamestopTradePrice : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`Loose Price: ${currentGame.loosePrice ? currentGame.loosePrice : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`Graded Price: ${currentGame.gradedPrice ? currentGame.gradedPrice : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`New Price: ${currentGame.newPrice ? currentGame.newPrice : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`retail CIB Buy: ${currentGame.retailCibBuy ? currentGame.retailCibBuy : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`retail CIB Sell': ${currentGame.retailCibSell ? currentGame.retailCibSell : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`retail Loose Buy: ${currentGame.retailLooseBuy ? currentGame.retailLooseBuy : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`retail Loose Sell: ${currentGame.retailLooseSell ? currentGame.retailLooseSell : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`retail New Buy: ${currentGame.retailNewBuy ? currentGame.retailNewBuy : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`retail New Sell: ${currentGame.retailNewSell ? currentGame.retailNewSell : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`sales volume: ${currentGame.salesVolume ? currentGame.salesVolume : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`asin: ${currentGame.asin ? currentGame.asin : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`epid: ${currentGame.epid ? currentGame.epid : "DATA UNAVAILABLE"}`}</h4>
        <h4>{`upc: ${currentGame.upc ? currentGame.upc : "DATA UNAVAILABLE"}`}</h4>
        <button onClick={clear}>CLEAR</button>
        </>
        :
        <BarCodeScanner
          scanResult={scanResult}
          setScanResult={setScanResult}
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
        />

      }
    </>
  )
}

export default App
