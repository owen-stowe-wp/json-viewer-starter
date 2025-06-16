import data from "./assets/data.json"
import { JsonViewer } from "./json-viewer"

function App() {
  return (<JsonViewer data={data} />);
}

export default App
