import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Tab } from '@material-ui/core';
import { Home, Favorite, Person } from '@material-ui/icons';
import Tab1 from './Tab';

function FloatingNav() {
    const [selectedButton, setSelectedButton] = useState(0);

    const handleClick = (event, newValue) => {
        setSelectedButton(newValue);
    };
    //https://coolors.co/595959-808f85-91c499-f2e9dc-cfd11a
    const buttonStyle = { color: '#F2E9DC' };
    const activeButtonStyle = { color: '#CFD11A' };

    return (
        <>
            <BottomNavigation
                value={selectedButton}
                onChange={handleClick}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '-20px',
                    borderRadius: '15px',
                    backgroundColor: '#808F85',
                    boxShadow: '2px 2px 9px rgba(0, 0, 0, 0.3)'
                }}>
                <BottomNavigationAction
                    label="----"
                    icon={<Home />}
                    style={selectedButton === 0 ? activeButtonStyle : buttonStyle}
                    disableRipple
                />
                <BottomNavigationAction
                    label="----"
                    icon={<Favorite />}
                    style={selectedButton === 1 ? activeButtonStyle : buttonStyle}
                    disableRipple
                />
                <BottomNavigationAction
                    label="----"
                    icon={<Person />}
                    style={selectedButton === 2 ? activeButtonStyle : buttonStyle}
                    disableRipple
                />
            </BottomNavigation>
            {selectedButton === 0 && <Tab1 />}
        </>
    );
}

export default FloatingNav;
