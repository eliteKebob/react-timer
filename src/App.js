import Header from "./components/Header"
import { useState } from "react"
import Stopwatch from "./components/Stopwatch"
import Countdown from "./components/Countdown"

import Switch from "./components/Switch"

function App() {
  const [mode, setMode] = useState(false)

  return (
    <div className="main">
      <Header />
      <Switch setMode={setMode} mode={mode} />
      {!mode ? <Stopwatch /> : <Countdown />}
    </div>
  )
}

export default App
