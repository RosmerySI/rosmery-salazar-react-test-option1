import { useState } from "react"
import { Private } from "./routes/private/Private"
import { Public } from "./routes/public/Public"



function App() {

  const [auth, setAuth] = useState(false)


  return (
    <>
      {
        auth
          ?
          <Private auth={auth} setAuth={setAuth} />
          :
          <Public auth={auth} setAuth={setAuth} />
      }
    </>
  )
}

export default App
