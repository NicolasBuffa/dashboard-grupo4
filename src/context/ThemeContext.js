import { useState, createContext } from 'react'

export const ThemeContext =createContext()

export const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = useState(window.localStorage.getItem("theme")||window.localStorage.setItem("theme","clearTheme"))

    const value = {
      theme,
      toggle: () => setTheme(previous => previous === "clearTheme" ? "darkTheme" : "clearTheme")
    }

  return (
    <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
  )
}

export default ThemeContext