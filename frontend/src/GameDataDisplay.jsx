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
        <div className="tableContainer">
          <table>
            <tbody>
              <tr>
                <td title="Console on which the item was released">Console</td>
                <td>{`${currentGame.consoleName ? currentGame.consoleName : "DATA UNAVAILABLE"}`}</td>
              </tr>
              <tr>
                <td title="Game upc">upc</td>
                <td>{currentGame.upc ? currentGame.upc : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Unique identifier (ASIN) for this product on Amazon.com">asin</td>
                <td>{currentGame.asin ? currentGame.asin : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Unique identifier (ePID) for this product on eBay">epid</td>
                <td>{currentGame.epid ? currentGame.epid : "DATA UNAVAILABLE"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section className="dataSection">
        <h2>Price Charting</h2>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <td className="tableHeader">Condition</td>
                <td className="tableHeader">Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td title="Price for item with original packaging and original seal">New</td>
                <td>{currentGame.newPrice ? currentGame.newPrice : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Price for item only with original box and manual included">Complete in Box</td>
                <td>{currentGame.cibPrice ? currentGame.cibPrice : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Price for brand new item graded by WATA or VGA">Graded</td>
                <td>{currentGame.gradedPrice ? currentGame.gradedPrice : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Price for item only without box or manual">Loose</td>
                <td>{currentGame.loosePrice ? currentGame.loosePrice : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Price for the original box only">Box Only</td>
                <td>{currentGame.boxOnlyPrice ? currentGame.boxOnlyPrice : "DATA UNAVAILABLE"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="dataSection">
        <h2>Gamestop</h2>
        <div className="tableContainer">
          <table>
            <th>
              <tr>
                <td className="tableHeader">Condition</td>
                <td className="tableHeader">Price</td>
              </tr>
            </th>
            <tbody>
              <tr>
                <td title="Price that GameStop charges for this game in Pre-Owned condition.">Sell</td>
                <td>{currentGame.gamestopPrice ? currentGame.gamestopPrice : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Trade price is what GameStop pays in cash for trade-in">Trade Price</td>
                <td>{currentGame.gamestopTradePrice ? currentGame.gamestopTradePrice : "DATA UNAVAILABLE"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="dataSection">
        <h2>Retail</h2>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <td className="tableHeader">Condition</td>
                <td className="tableHeader">Buy Price</td>
                <td className="tableHeader">Sell Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td title="Recommended price for retailers buying/selling in brand new condition">New</td>
                <td>{currentGame.retailNewBuy ? currentGame.retailNewBuy : "DATA UNAVAILABLE"}</td>
                <td>{currentGame.retailNewSell ? currentGame.retailNewSell : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Recommended price for retailers buying/selling in complete in box condition">Complete in Box</td>
                <td>{currentGame.retailCibBuy ? currentGame.retailCibBuy : "DATA UNAVAILABLE"}</td>
                <td>{currentGame.retailCibSell ? currentGame.retailCibSell : "DATA UNAVAILABLE"}</td>
              </tr>
              <tr>
                <td title="Recommended price for retailers buying/selling in loose condition">Loose</td>
                <td>{currentGame.retailLooseBuy ? currentGame.retailLooseBuy : "DATA UNAVAILABLE"}</td>
                <td>{currentGame.retailLooseSell ? currentGame.retailLooseSell : "DATA UNAVAILABLE"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

