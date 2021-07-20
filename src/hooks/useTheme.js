import { ThemeContext } from '../providers/theme'
import { useContext } from 'react'

export function useTheme () {
  return useContext(ThemeContext)
}
