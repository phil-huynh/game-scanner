import { useStore } from "./ContextStore"
import Menu from "./Menu"

export default function GameDataDisplay() {

  const { currentGame } = useStore()

  return (
    <>
      <div>
        <Menu/>
      </div>

      <div>
        <h1>{`${currentGame.productName ? currentGame.productName : "DATA UNAVAILABLE"}`}</h1>
        <h3>{`${currentGame.genre ? currentGame.genre : "DATA UNAVAILABLE"}`}</h3>
        <h3>{`${currentGame.consoleName ? currentGame.consoleName : "DATA UNAVAILABLE"}`}</h3>
        <h5>{`asin: ${currentGame.asin ? currentGame.asin : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`epid: ${currentGame.epid ? currentGame.epid : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`upc: ${currentGame.upc ? currentGame.upc : "DATA UNAVAILABLE"}`}</h5>
      </div>
      <div>
        <h2>Price Charting</h2>
        <h5>{`New Price: ${currentGame.newPrice ? currentGame.newPrice : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Complete in Box Price: ${currentGame.cibPrice ? currentGame.cibPrice : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Graded Price: ${currentGame.gradedPrice ? currentGame.gradedPrice : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Loose Price: ${currentGame.loosePrice ? currentGame.loosePrice : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Box Only Price: ${currentGame.boxOnlyPrice ? currentGame.boxOnlyPrice : "DATA UNAVAILABLE"}`}</h5>
      </div>
      <div>
        <h2>Gamestop</h2>
        <h5>{`Price: ${currentGame.gamestopPrice ? currentGame.gamestopPrice : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Trade Price: ${currentGame.gamestopTradePrice ? currentGame.gamestopTradePrice : "DATA UNAVAILABLE"}`}</h5>
      </div>
      <div>
        <h2>Retail</h2>
        <h5>{`Complete in Box Buy: ${currentGame.retailCibBuy ? currentGame.retailCibBuy : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Complete in Box Sell': ${currentGame.retailCibSell ? currentGame.retailCibSell : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Loose Buy: ${currentGame.retailLooseBuy ? currentGame.retailLooseBuy : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`Loose Sell: ${currentGame.retailLooseSell ? currentGame.retailLooseSell : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`New Buy: ${currentGame.retailNewBuy ? currentGame.retailNewBuy : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`New Sell: ${currentGame.retailNewSell ? currentGame.retailNewSell : "DATA UNAVAILABLE"}`}</h5>
      </div>
    </>
  )
}

