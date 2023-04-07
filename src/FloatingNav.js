import React, { useState } from 'react';
import { ExploreOutlined, PersonOutline, FavoriteBorder } from '@mui/icons-material';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';

const useStyles = makeStyles((theme) => 
({
    root: {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        right: '20px',
        borderRadius: '40px',
        boxShadow: '2px 2px 9px rgba(0, 0, 0, 0.3)',
        height: '80px !important'
    },
    button: {
        color: theme.palette.text.primary,
        '&.Mui-selected': {
            color: theme.palette.action.active
        },
         '& .MuiBottomNavigationAction-label': {
            fontWeight: theme.typography.fontWeightLight,
          },
    }
}));

function FloatingNav() {
    const [selectedButton, setSelectedButton] = useState(0);
    const theme = useTheme(); 
    const classes = useStyles();
    const handleClick = (event, newValue) => {
        setSelectedButton(newValue);
    };

    return (
        <ThemeProvider>
            <BottomNavigation
                  showLabels={true}
                value={selectedButton}
                onChange={handleClick}
                className={classes.root}
                style={{ backgroundColor: theme.palette.primary.main }}>
                    
                <BottomNavigationAction
                    label="Explore"
                    icon={<ExploreOutlined fontSize="large" />}
                    className={classes.button}
                    style={selectedButton === 0 ? { color:  theme.palette.action.active } : { color:  theme.palette.text.primary }}
                    disableRipple
                />
                <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteBorder fontSize="large" />}
                    className={classes.button}
                    style={selectedButton === 1 ? { color: theme.palette.action.active } : { color:  theme.palette.text.primary }}
                    disableRipple
                />
                <BottomNavigationAction
                    label="Profile"
                    icon={<PersonOutline fontSize="large" />}
                    className={classes.button}
                    style={selectedButton === 2 ? { color:  theme.palette.action.active } : { color:  theme.palette.text.primary }}
                    disableRipple
                />
            </BottomNavigation>
            {selectedButton === 0 && <Tab1 />}
            {selectedButton === 1 && <Tab2 />}
            {selectedButton === 2 && <Tab3 />}
        </ThemeProvider>
    );
}

export default FloatingNav;
