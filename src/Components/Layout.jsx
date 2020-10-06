import React, {useContext} from 'react';
import data from '../../data/data.json'
import HeaderContainer from './HeaderContainer';
import MainContainer from './MainContainer';
import themeContext from '../theme';

const Layout = props => {
    const theme = useContext(themeContext)
    const datasrc = data
    document.body.style.background = theme.body.background
    document.body.style.color = theme.body.color

    return(
        <div className="main-app">
            <div style={theme.patternBG} className="background-pattern"></div>
            <HeaderContainer data= {datasrc} state= {props.state} toggler={props.toggler}/>
            <MainContainer data= {datasrc}/>            
        </div>
    )
}

export default Layout