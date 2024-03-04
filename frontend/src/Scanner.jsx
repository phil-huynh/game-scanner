import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useStore } from "./ContextStore";

export default function BarCodeScanner () {

  const { scanResult, setScanResult, currentGame, setCurrentGame } = useStore()

  const getGame = async (upc) => {
    console.log(upc)
    const response = await fetch(`http://localhost:8000/game?upc=${upc}`)
    if (response.ok) {
      const data = await response.json()
      console.log(data.doc)
      setCurrentGame(data.doc)
    } else console.log("it didn't work")
  }

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
        getGame(result)
      }

      const error = (err) => {
        console.warn(err)
      }

      scanner.render(success, error);
    }
  }, [scanResult])

  return <div id="reader" style={{width: '350px', height: '350px'}}/>

}