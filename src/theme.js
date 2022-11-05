import { createContext } from 'react'

export const ThemeContext = createContext(null)

/* Generated with https://codepen.io/sosuke/pen/Pjoqqp to get the color #D30001 */
export const RED_FILTER = 'invert(15%) sepia(89%) saturate(4717%) hue-rotate(350deg) brightness(77%) contrast(124%)'
/* Generated with https://codepen.io/sosuke/pen/Pjoqqp to get the color #FFFFFF */
export const WHITE_FILTER = 'invert(99%) sepia(1%) saturate(0%) hue-rotate(79deg) brightness(108%) contrast(100%)'

export const getStoredTheme = () => {
  return localStorage.getItem('georgemarcus-theme')
}

export const updateStoredTheme = theme => {
  localStorage.setItem('georgemarcus-theme', theme)
}
