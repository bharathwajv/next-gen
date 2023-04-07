import { Box, Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

function WelomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <h1>Welcome to My App</h1>
        <h3 variant="body1" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod felis et lectus semper, in scelerisque velit dictum.
        </h3>
        <Button variant="contained" color="button" className={classes.button}>
          Get Started
        </Button>
      </Box>
    </div>
  );
}

export default WelomePage;
