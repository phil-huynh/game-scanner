import gameConsoles from "./gameConsoles.js"
import Menu from "./Menu.jsx"
import { useStore } from "./ContextStore.jsx"

export default function Search() {

  const {
    setSelectedConsole,
    gameList,
    getGamesForSystem,
    setGameList,
    selectedGame,
    setSelectedGame,
    getGameByPCID,
  } = useStore()

  const chooseConsole = (e) => {
    const gameConsole = gameConsoles.filter(system => e.target.value === system)[0]
    if (gameConsole) {
      setSelectedConsole(gameConsole)
      getGamesForSystem(gameConsole)
    } else {
      setGameList(null)
    }
  }

  const chooseGame = (e) => {
    const game = gameList.filter(game => game.productName === e.target.value)[0]
    setSelectedGame(game.pcID)
  }

  return (
    <>
      <div>
        <Menu/>
      </div>
      <fieldset>
        <legend>Game Consoles</legend>
        <input
          list="consoles"
          name="console"
          id="console"
          placeholder="Select a Console"
          onChange={chooseConsole}
        />
        <datalist name="consoles" id="consoles" >
          <option key="noSystem" value=""/>
          {gameConsoles.map((system) =>
            <option key={system} value={system}/>
          )}
        </datalist>
      </fieldset>
      {gameList ?
        <fieldset>
          <legend>Games</legend>
          <input
            list="games"
            name="game"
            id="game"
            placeholder="Select a Game"
            onChange={chooseGame}
          />
          <datalist name="games" id="games">
            <option key="noGame" value=""/>
            {gameList?.map((game) =>
              <option key={game.pcID} value={game.productName}/>
            )}
          </datalist>
        </fieldset>
        :null
      }
      <button onClick={()=>selectedGame ? getGameByPCID(selectedGame) : null}>Get Game Data</button>
    </>
  )
}