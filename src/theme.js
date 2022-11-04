import { createContext } from 'react'

export const ThemeContext = createContext(null)

export const getStoredTheme = () => {
  return localStorage.getItem('georgemarcus-theme')
}

export const updateStoredTheme = theme => {
  localStorage.setItem('georgemarcus-theme', theme)
}
