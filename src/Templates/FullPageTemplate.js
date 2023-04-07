import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#222344',
    minHeight: '100vh',
    width: '100%',
  },
}));

const FullPageTemplate = ({ children }) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      {children}
    </Box>
  );
};

export default FullPageTemplate;
