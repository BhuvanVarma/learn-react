import Students from "./components/Students"

function App() {

  return (
    <>
      <Students name="Bhuvan" age="22" isStudent={false}/>
      <Students name="Mohit" age="17" isStudent={true}/>
      <Students/>
    </>
  )
}

export default App
