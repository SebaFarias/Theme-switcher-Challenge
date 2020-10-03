import React, {useState , useCallback} from 'react';
import ThemeContext , { DARK_THEME , LIGHT_THEME , DarkMode } from './theme';
import HeaderContainer from './Components/HeaderContainer';
import MainContainer from './Components/MainContainer';
import Attribution from './Components/Attribution';
import data from '../data/data.json';
import './style.css';


const App = () => {
    const datasrc = data
    const [ dark , setDark ] = useState(DarkMode.getTheme)
    const theme = dark ? DARK_THEME : LIGHT_THEME

    const toggleDarkMode = useCallback(() => {
        setDark( () => {
            const newState = !dark;
            DarkMode.setTheme(newState);
            return newState;
        });
    },[dark]);

    return(
        <ThemeContext.Provider value={theme}>       
            <div className="background-pattern"></div>
            <HeaderContainer data= {datasrc} state= {dark} toggler={toggleDarkMode}/>
            <MainContainer data= {datasrc}/>            
            <Attribution/>
        </ThemeContext.Provider>
    )
}

export default App