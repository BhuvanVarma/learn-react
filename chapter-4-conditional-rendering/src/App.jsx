import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Brocode" />
      <UserGreeting/>
    </>
  )
}

export default App
