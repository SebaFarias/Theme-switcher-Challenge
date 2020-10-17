import React from 'react'

const DARK_MODE_KEY = 'dark_mode';
const DARK_THEME = { 
    name: 'dark',
    textPrimary: {
        color: '#FFFFFF',
    }, 
    body: {
        color: '#8B97C6',
        background: '#1E202A',
    }, 
    patternBG: {
        background: '#1F212D'
    },
    cardBG: {
        background: '#252A41',
    },
    switchBG:{
        background:'linear-gradient(90deg, #378FE6 0%, #3EDA82 100%)',
    },
    thumb:{
        content:'',
        position: 'absolute',
        width: '20px',
        height: '20px',
        top: '2px',
        left: '0px',  
        borderRadius: '50%',
        transition: 'all 200ms ease-in-out',
        transform: 'translateX(2px)',
        background: '#1E202A',
    }
    ,
    cardHover:{
        background: '#333A56',
    },
    switcherLabel: {
        color: 'white',
    },
    switchBGHover: {
        background:'linear-gradient(90deg, #378FE6 0%, #3EDA82 100%)',
    }
};
const LIGHT_THEME = {  
    name: 'light',
    textPrimary: {
        color: '#1E202A',
    }, 
    body: {
        color: '#63687E',
        background: '#FFFFFF',
    }, 
    patternBG: {
        background: '#F5F7FF'
    },
    cardBG: {
        background: '#F0F2FA',
    },
    switchBG:{
        background:'#AEB3CB',
    },
    thumb:{
        content:'',
        position: 'absolute',
        width: '20px',
        height: '20px',
        top: '2px',
        left: '0px',  
        borderRadius: '50%',
        transition: 'all 200ms ease-in-out',
        transform: 'translateX(26px)',
        background: '#F5F7FF',
    },
    cardHover:{
        background: '#E1E3F0',
    },
    switcherLabel:{
        color: '#63687E',
    },
    switchBGHover: {
        background:'linear-gradient(90deg, #378FE6 0%, #3EDA82 100%)',
    }
};

const DarkMode = {
    getTheme: () => {
        try {
            return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true
        } catch (e) {
            return false
        }
    },
    setTheme: value => {
        try {
            window.localStorage.setItem(DARK_MODE_KEY,JSON.stringify(value === true))
        } catch (e) {}
    }
}

export { DARK_THEME , LIGHT_THEME , DarkMode }

export default React.createContext();