import gameConsoles from "./gameConsoles.js"
import { useStore } from "./ContextStore.jsx"

export default function Search() {

  const { setPage, selectedConsole, setSelectedConsole, gameList, getGamesForSystem, setGameList, selectedGame, setSelectedGame, getGameByPCID } = useStore()

  const chooseConsole = (e) => {
    if (e.target.value === "none") {
      setGameList(null)
    } else {
      setSelectedConsole(e.target.value)
      getGamesForSystem(e.target.value)
    }
  }

  const chooseGame = (e) => {
    setSelectedGame(e.target.value)
  }




  return (
    <>
      <div>
        <button onClick={()=>setPage('menu')}>Back to Menu</button>
        <button onClick={()=>setPage('scanner')}>Scan a Game</button>
      </div>
      <div>
        <select name="consoles" id="consoles" onChange={chooseConsole}>
            <option key="noSystem" value="none">Choose a Game Console</option>
          {gameConsoles.map((system) =>
            <option key={system} value={system}>{system}</option>
          )}
        </select>

      </div>
      {gameList ?
        <div>
          <select name="games" id="games" onChange={chooseGame}>
            <option key="noGame" value="">Choose a Game</option>
            {gameList?.map((game) =>
              <option key={game.pcID} value={game.pcID}>{game.productName}</option>
            )}
          </select>
        </div>
        :null
      }
      <button onClick={()=>getGameByPCID(selectedGame)}>Get Game Data</button>
    </>
  )
}