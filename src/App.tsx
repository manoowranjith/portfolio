import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createThemeMode } from './Theme';

function App() {

  const theme = createThemeMode("light");

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ p: 1, mt: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App

