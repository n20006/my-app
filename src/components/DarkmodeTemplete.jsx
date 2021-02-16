import React from 'react'
import '../App.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'

const DarkmodeSample = () => {
  const [darkMode, setDarkMode] = React.useState(
    window.localStorage.getItem('darkMode') === 'on'
  )
  const handleDarkModeOn = () => {
    window.localStorage.setItem('darkMode', 'on')
    setDarkMode(true)
  }
  const handleDarkModeOff = () => {
    window.localStorage.setItem('darkMode', 'off')
    setDarkMode(false)
  }
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.blue[800]
      },
      type: darkMode ? 'dark' : 'light'
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />{' '}
        {darkMode ? (
          <IconButton id='btn' color='inherit' onClick={handleDarkModeOff}>
            <Brightness7Icon />{' '}
          </IconButton>
        ) : (
          <IconButton id='btn' color='inherit' onClick={handleDarkModeOn}>
            <Brightness4Icon />{' '}
          </IconButton>
        )}
      </ThemeProvider>{' '}
    </>
  )
}

export default DarkmodeSample
