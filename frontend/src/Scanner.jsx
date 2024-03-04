import { useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useStore } from "./ContextStore";

export default function BarCodeScanner () {

  const { scanResult, setScanResult, currentGame, setCurrentGame, getGameByUPC, setPage } = useStore()

  useEffect(() => {
    if (!scanResult) {
      const scanner = new Html5QrcodeScanner(
        'reader',
        {
          qrbox: {
            width: 260,
            height: 210
          },
          fps: 15,
        }
      );
      const success = (result) => {
        if (result.length === 13 && result[0] === '0') {
          result = result.slice(1)
        }
        scanner.clear()
        setScanResult(result)
        getGameByUPC(result)

      }
      const error = (err) => {
        console.warn(err)
      }
      scanner.render(success, error);
    }
  }, [scanResult])

  return (
    <>
      <button onClick={()=>setPage('menu')}>Back to Menu</button>
      <button onClick={()=>setPage('search')}>Search by Name</button>
      <div id="reader" style={{width: '350px', height: '350px'}}/>
    </>
  )

}