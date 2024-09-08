import { useEffect, useState } from "react"
import { Private } from "./routes/private/Private"
import { Public } from "./routes/public/Public"
import { BrowserRouter } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { onLogin } from "./store/authSlice"



function App() {

  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    const authState = JSON.parse(localStorage.getItem('authState'));  

    if (authState && authState.status === 'authenticated') {
      dispatch(onLogin(authState.dataBackend));
    }
  }, [dispatch]); 

  return (
    <BrowserRouter>
      {
        status === 'authenticated'
          ?
          <Private />
          :
          <Public />
      }
    </BrowserRouter>
  )
}

export default App
