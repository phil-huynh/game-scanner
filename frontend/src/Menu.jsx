import { useStore } from './ContextStore'

export default function Menu() {
  const {page, switchPage} = useStore()

  return (
    <>
      {page !== 'menu' && <button onClick={()=>switchPage('menu')}>Back to Menu</button>}
      {page !== 'scanner' && <button onClick={()=>switchPage('scanner')}>Scan a Game</button>}
      {page !== 'search' && <button onClick={()=>switchPage('search')}>Search by Name</button>}
    </>
  )
}