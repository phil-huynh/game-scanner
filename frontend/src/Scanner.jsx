import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode'

export default function BarCodeScanner ({ scanResult, setScanResult }) {


  useEffect(() => {
    if (!scanResult) {
      const scanner = new Html5QrcodeScanner(
        'reader',
        {
          qrbox: {
            width: 260,
            height: 210
          },
          fps: 10,
        }
      );

      const success = (result) => {
        scanner.clear()
        setScanResult(result)
      }

      const error = (err) => {
        console.warn(err)
      }

      scanner.render(success, error);
    }
  }, [scanResult])

  return (
      <div id="reader" style={{width: '350px', height: '350px'}}></div>
  )
}