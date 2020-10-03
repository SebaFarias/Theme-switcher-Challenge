import React from 'react'

const DARK_MODE_KEY = 'dark_mode';
const DARK_THEME = { 
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
        background:'linear-gradient(90deg, #378FE6 0%, #3EDA82 100%);',
    },
    cardHover:'#333A56',
    switchBGHover: 'linear-gradient(90deg, #378FE6 0%, #3EDA82 100%);',
};
const LIGHT_THEME = { 
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
    cardHover:'#E1E3F0',
    switchBGHover: 'linear-gradient(90deg, #378FE6 0%, #3EDA82 100%);',
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