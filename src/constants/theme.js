import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLORS = {
  primary: '#4630EB',
  secondary: '#000020',

  success: '#00C851',
  error: '#ff4444',

  black: '#171717',
  white: '#FFFFFF',
  background: '#252c4a',
  border: '#F5F5F7',
  play: '#49CC96'
}

export const SIZES = {
  base: 10,
  width,
  height,
}
