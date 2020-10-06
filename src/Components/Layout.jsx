import React, {useContext} from 'react';
import data from '../../data/data.json'
import HeaderContainer from './HeaderContainer';
import MainContainer from './MainContainer';
import Attribution from './Attribution';
import upArrow from '../../images/icon-up.svg';
import downArrow from '../../images/icon-down.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import instagram from '../../images/icon-instagram.svg';
import youtube from '../../images/icon-youtube.svg';
import themeContext from '../theme';

const Layout = props => {
    const theme = useContext(themeContext)
    const datasrc = data
    const imgs = {
        upArrow: upArrow,
        downArrow: downArrow,
        facebook: facebook,
        twitter: twitter,
        instagram: instagram,
        youtube: youtube
    }
    document.body.style.background = theme.body.background
    document.body.style.color = theme.body.color

    return(
        <div className="main-app">
            <div style={theme.patternBG} className="background-pattern"></div>
            <HeaderContainer data= {datasrc} img={imgs} state= {props.state} toggler={props.toggler}/>
            <MainContainer data= {datasrc} img={imgs}/>
            <Attribution/>            
        </div>
    )
}

export default Layout