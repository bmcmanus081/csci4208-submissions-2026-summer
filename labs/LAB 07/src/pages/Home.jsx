import { useGame } from '../GameContext.jsx'
import Inventory from '../components/Inventory.jsx'
export default function Intro() {
  const { goTo, acceptQuest } = useGame()
  function beginAdventure() {
    acceptQuest()
    goTo('overworld')
  }
  return (
    <main>
      <h1>Story Introduction</h1>
      <hr />
      <img src="/assets/intro.gif" width="360" alt="Village elder" />
      <p>
        Welcome, traveler! Our land is plagued by a great evil.
        Please save us. Here, take 5 gold as a deposit.
      </p>
      <button onClick={beginAdventure}>
        Adventure out of town
      </button>
      <hr />
      <Inventory />
    </main>
  )
}
