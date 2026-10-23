
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import {
  Button,
  Container,
  Typography,
} from '@mui/material'
import AddHabitForm from './components/add habbit-form'
import Habitlist from './components/habit-list'
import { ThemeProvider, useTheme } from './components/themeContext'
import UserForm from './components/Login'
import TanStacKtable from './components/TanStackTable'

function HabitTracker() {
  const { darkMode, toggleTheme } = useTheme()
  return (
    <Container sx={{
      minHeight: '100vh',
      py: 4,
      bgcolor: darkMode ? '#222' : '#fff',
      color: darkMode ? '#fff' : '#222',
    }}>
      <Button variant='contained' onClick={toggleTheme} sx={{ mb: 2 }}>switch to{darkMode ? "Light" : "Dark"} mode</Button>
      <Typography component="h1" variant="h2" align='center'>
        habit tracker

      </Typography>
      <AddHabitForm></AddHabitForm>
      <Habitlist></Habitlist>
    </Container>
  )
}

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <HabitTracker></HabitTracker>
        </ThemeProvider>
        <UserForm></UserForm>

      </Provider>
      <TanStacKtable></TanStacKtable>



    </>
  )
}

export default App
