import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useStore } from "./ContextStore";

export default function BarCodeScanner () {

  const { scanResult, setScanResult, currentGame, setCurrentGame, getGameByUPC } = useStore()



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
        scanner.clear()
        result = result.length === 13 && result[0] === '0' ? result.slice(1) : result
        setScanResult(result)
        getGameByUPC(result)
      }

      const error = (err) => {
        console.warn(err)
      }

      scanner.render(success, error);
    }
  }, [scanResult])

  return <div id="reader" style={{width: '350px', height: '350px'}}/>

}