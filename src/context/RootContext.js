import React, {useEffect, useState} from 'react'
import AppContext from ".";
import ls from 'local-storage'



// export const RootContext = React.createContext()

const RootContext = ({ children }) => {
  const prevAuth = !!ls.get('auth') ? ls.get('auth') : false
  // const prevAuthBody = ls.get('authBody') || null

  const [authenticated, setAuthenticated] = useState(prevAuth)

  // const [authBody, setAuthBody] = useState(prevAuthBody)

  const loginState = {
    authenticated,
    setAuthenticated
    // authBody,
    // setAuthBody
  }

  useEffect(() => {
      ls.set('authenticated', authenticated)
    }, [authenticated]
  )

  // useEffect(() => {
  //   console.log("loginState here: ", authenticated)
  // }, [authenticated])

  return (
    <AppContext.Provider value={loginState}>
      { children }
    </AppContext.Provider>
  )

}

export default RootContext
