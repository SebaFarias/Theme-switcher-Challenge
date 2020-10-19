import React, {useState , useCallback} from 'react';
import ThemeContext , { DARK_THEME , LIGHT_THEME , DarkMode } from './theme';
import Layout from './Components/Layout'
import './styles/style.css';
import './styles/fonts.css';


const App = () => {
	
	const [ dark , setDark ] = useState(DarkMode.getTheme)
	const theme = dark ? DARK_THEME : LIGHT_THEME

	const toggleDarkMode = useCallback(() => {
		setDark( prevState => {
			const newState = !prevState;
			DarkMode.setTheme(newState);
			return newState;
		});
	},[dark]);

	return(
		<ThemeContext.Provider value={theme}>       
			<Layout state={dark} toggler={toggleDarkMode}/>            
		</ThemeContext.Provider>
	)
}

export default App