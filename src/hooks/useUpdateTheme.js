import { UpdateThemeContext } from '../providers/theme'
import { useContext } from 'react'

export function useUpdateTheme () {
  return useContext(UpdateThemeContext)
}
