import { useStore } from "./ContextStore"
import Menu from "./Menu"

export default function GameDataDisplay() {

  const { currentGame } = useStore()

  return (
    <div className="displayContainer">
      <div>
        <Menu/>
      </div>

      <div>
        <h1>{`${currentGame.productName ? currentGame.productName : "DATA UNAVAILABLE"}`}</h1>
        <h4>{`${currentGame.consoleName ? currentGame.consoleName : "DATA UNAVAILABLE"}`}</h4>
        {/* <h3>{`${currentGame.genre ? currentGame.genre : "DATA UNAVAILABLE"}`}</h3>
        <h5>{`asin: ${currentGame.asin ? currentGame.asin : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`epid: ${currentGame.epid ? currentGame.epid : "DATA UNAVAILABLE"}`}</h5>
        <h5>{`upc: ${currentGame.upc ? currentGame.upc : "DATA UNAVAILABLE"}`}</h5> */}
      </div>
      <section className="dataSection">
        <h2>Price Charting</h2>
        <div className="tableContainer">
          <table>
            <tr>
              <td className="tableHeader">Condition</td>
              <td className="tableHeader">Price</td>
            </tr>
            <tr>
              <td>New</td>
              <td>{currentGame.newPrice ? currentGame.newPrice : "DATA UNAVAILABLE"}</td>
            </tr>
            <tr>
              <td>Complete in Box</td>
              <td>{currentGame.cibPrice ? currentGame.cibPrice : "DATA UNAVAILABLE"}</td>
            </tr>
            <tr>
              <td>Graded</td>
              <td>{currentGame.gradedPrice ? currentGame.gradedPrice : "DATA UNAVAILABLE"}</td>
            </tr>
            <tr>
              <td>Loose</td>
              <td>{currentGame.loosePrice ? currentGame.loosePrice : "DATA UNAVAILABLE"}</td>
            </tr>
            <tr>
              <td>Box Only</td>
              <td>{currentGame.boxOnlyPrice ? currentGame.boxOnlyPrice : "DATA UNAVAILABLE"}</td>
            </tr>
          </table>
        </div>
      </section>
      <section className="dataSection">
        <h2>Gamestop</h2>
        <div className="tableContainer">
          <table>
            <tr>
              <td className="tableHeader">Condition</td>
              <td className="tableHeader">Price</td>
            </tr>
            <tr>
              <td>Loose</td>
              <td>{currentGame.gamestopPrice ? currentGame.gamestopPrice : "DATA UNAVAILABLE"}</td>
            </tr>
            <tr>
              <td>Box Only</td>
              <td>{currentGame.gamestopTradePrice ? currentGame.gamestopTradePrice : "DATA UNAVAILABLE"}</td>
            </tr>
          </table>
        </div>
      </section>
      <section className="dataSection">
        <h2>Retail</h2>
        <div className="tableContainer">
          <table>
            <tr>
              <td className="tableHeader">Condition</td>
              <td className="tableHeader">Buy Price</td>
              <td className="tableHeader">Sell Price</td>
            </tr>
            <tr>
              <td>New</td>
              <td>{currentGame.retailNewBuy ? currentGame.retailNewBuy : "DATA UNAVAILABLE"}</td>
              <td>{currentGame.retailNewSell ? currentGame.retailNewSell : "DATA UNAVAILABLE"}</td>
            </tr>
            <tr>
              <td>Complete in Box</td>
              <td>{currentGame.retailCibBuy ? currentGame.retailCibBuy : "DATA UNAVAILABLE"}</td>
              <td>{currentGame.retailCibSell ? currentGame.retailCibSell : "DATA UNAVAILABLE"}</td>
            </tr>
            <tr>
              <td>Loose</td>
              <td>{currentGame.retailLooseBuy ? currentGame.retailLooseBuy : "DATA UNAVAILABLE"}</td>
              <td>{currentGame.retailLooseSell ? currentGame.retailLooseSell : "DATA UNAVAILABLE"}</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  )
}

