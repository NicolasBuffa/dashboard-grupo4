import { useState, createContext } from 'react'
import storage  from '../utils/storage'

export const ThemeContext =createContext()

export const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = useState(storage.get('theme')||storage.set("theme","clearTheme"))

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