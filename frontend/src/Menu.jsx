import { useStore } from './ContextStore'

export default function Menu() {
  const {setPage} = useStore()

  return (
    <>
      <button onClick={()=>setPage('scanner')}>Scan a Game</button>
      <button onClick={()=>setPage('search')}>Search by Name</button>
    </>
  )
}