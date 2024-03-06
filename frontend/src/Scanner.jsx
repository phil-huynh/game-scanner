import { Html5QrcodeScanner } from 'html5-qrcode'
import { useStore } from "./ContextStore";
import { useEffect } from "react";
import Menu from './Menu'

export default function BarCodeScanner () {

  const {
    currentGame,
    getGameByUPC,
    setPage
  } = useStore()

  useEffect(() => {
    if (!currentGame) {
      const scanner = new Html5QrcodeScanner(
        'scanner',
        {
          qrbox: {
            width: 350,
            height: 260
          },
          fps: 15,
        }
      );
      const success = (result) => {
        if (result.length === 13 && result[0] === '0') {
          result = result.slice(1)
        }
        scanner.clear()
        getGameByUPC(result)
        setPage('display')
      }
      const error = (err) => {
        console.warn(err)
      }
      scanner.render(success, error);
    }
  })

  return (
    <>
      <Menu/>
      <div id="scanner"/>
    </>
  )
}