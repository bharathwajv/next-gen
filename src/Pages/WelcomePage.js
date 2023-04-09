import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomButton from '../Templates/CustomButton';
import { useTheme } from '@emotion/react';

function WelomePage() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [hasVisited, setHasVisited] = useState(false);
  const theme = useTheme(); 

   useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (visited) {
      setHasVisited(true);
    }
  }, []);

  function handleClick() {
    navigate('/home'); 
    localStorage.setItem('hasVisited', true);
  }
  if (hasVisited) {
    navigate('/home'); 
    return null; 
  }

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <h1 style={{ color: theme.palette.text.dark }} >Hello!</h1>
        <h3 align="center"  style={{ color: theme.palette.text.dark }}>
          this is my app and should change the text here . can we get started ?
        </h3>
        <CustomButton  variant="contained" color="button" className={classes.button} onClick={handleClick}>   Explore   </CustomButton>
   
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  logo: {
    marginBottom: theme.spacing(3),
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: theme.spacing(4),
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    margin: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
    borderRadius: '20px',
  },
}));

export default WelomePage;
