import { useEffect, useState } from "react"
import { Private } from "./routes/private/Private"
import { Public } from "./routes/public/Public"



function App() {

  const [auth, setAuth] = useState(false)

  const gettingUser = async () => {
    const user = await JSON.parse(localStorage.getItem('email'))
    user ?  setAuth(true) : setAuth(false)
  }

  useEffect(() => {
    gettingUser()
  }, [])

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
