import { useState, useEffect } from 'react'
import './App.css'
import { Html5QrcodeScanner } from 'html5-qrcode'
import BarCodeScanner from './Scanner'

function App() {

  const [scanResult, setScanResult] = useState(null)
  const clear = () => setScanResult(null)

  return (
    <>
      {scanResult ?
        <>
        <div>{`Success: ${scanResult}`}</div>
        <button onClick={clear}>CLEAR</button>
        </>
        :
        <BarCodeScanner scanResult={scanResult} setScanResult={setScanResult}/>

      }
    </>
  )
}

export default App
