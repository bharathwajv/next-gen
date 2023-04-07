import React, { useState } from 'react';
import { Home, Favorite, Person } from '@mui/icons-material';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    right: '20px',
    borderRadius: '15px',
    backgroundColor: '#353666',
    boxShadow: '2px 2px 9px rgba(0, 0, 0, 0.3)'
  },
  button: {
    color: '#F2E9DC',
    '&.Mui-selected': {
      color: '#EC5656'
    }
  }
}));

function FloatingNav() {
    const [selectedButton, setSelectedButton] = useState(0);
    const classes = useStyles();

    const handleClick = (event, newValue) => {
        setSelectedButton(newValue);
    };

    return (
        <>
            <BottomNavigation
                value={selectedButton}
                onChange={handleClick}
                className={classes.root}
            >
                <BottomNavigationAction
                    label="----"
                    icon={<Home />}
                    classes={{
                        root: classes.button,
                        selected: classes.activeButton
                    }}
                    value={0}
                    disableRipple
                />
                <BottomNavigationAction
                    label="----"
                    icon={<Favorite />}
                    classes={{
                        root: classes.button,
                        selected: classes.activeButton
                    }}
                    value={1}
                    disableRipple
                />
                <BottomNavigationAction
                    label="----"
                    icon={<Person />}
                    classes={{
                        root: classes.button,
                        selected: classes.activeButton
                    }}
                    value={2}
                    disableRipple
                />
            </BottomNavigation>
            {selectedButton === 0 && <Tab1 />}
            {selectedButton === 1 && <Tab2 />}
            {selectedButton === 2 && <Tab3 />}
        </>
    );
}

export default FloatingNav;
