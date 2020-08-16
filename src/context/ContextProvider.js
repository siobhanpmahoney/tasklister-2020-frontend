import React, {useState} from 'react';
import AppContext from ".";

const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginState = {
    setIsLoggedIn,
    isLoggedIn
  }

  return (
    <AppContext.Provider value = {loginState}>
      { children }
    </AppContext.Provider>
  )
}

export default ContextProvider;
