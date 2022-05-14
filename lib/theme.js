import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: '#4b4d52',
        color: 'white',
      }
    }
  }
}

const theme = extendTheme({ config })

export default theme