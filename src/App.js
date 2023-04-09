import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import FloatingNav from './FloatingNav';

//https://user-images.githubusercontent.com/103980/178092656-35720dd3-0a09-4a60-9030-02e8ece10b92.png
//https://coolors.co/palette/353666-222344-707193-ec5656

function App() {
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />

      <Router>
        <Routes>

          <Route exact path="/" element={<WelcomePage/>}/>
          <Route exact path="/home" element={<FloatingNav/>}/>

        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 30
  },
  palette: {
    primary: {
      main: '#353666',
    },
    secondary: {
      main: '#707193',
    },
    background: {
      default: '#222344',
    },
    text: {
      primary: '#F2E9DC',
      dark:'#353666'
    },
    action: {
      active: '#EC5656',
    },
    button: {
      main: '#EC5656',
    },
  },
});
