import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './App.css';
import FloatingNav from './FloatingNav';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
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
    },
    action: {
      active: '#EC5656',
    },
    button: {
      main: '#EC5656',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FloatingNav />
    </ThemeProvider>
  );
}

export default App;