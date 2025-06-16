import data from "./assets/data.json"

function App() {
  return (
    <>
      <h1>JSON Viewer</h1>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </>
  )
}

export default App
