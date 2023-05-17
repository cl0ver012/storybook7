import { DefaultTheme } from 'styled-components'
import { Colors, Fonts } from './types'

const lightColors: Colors = {
  primary: '#000000',
  secondary: '#FFFFFF',
  secondaryText: '#737373',
  primaryBackground: '#FFFFFF',
  secondaryBackground: '#000000',
  primaryBorderColor: '#E5E5E5',
}

const fonts: Fonts = {
  primary: 'eina',
  secondary: 'editor',
}

const lightTheme: DefaultTheme = {
  isDark: false,
  colors: lightColors,
  fonts: fonts,
}

export default lightTheme
