import React , {useContext} from 'react';
import themeContext, { DARK_THEME } from '../theme';
import '../styles/footer.css'

const Footer = () => {
    const theme = useContext(themeContext)
    const style = {
        color: theme.body.color,
        background: theme.patternBG.background
    }
    return(
        <div className="attribution" style={style} >
            Challenge by <a href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H" target="_blank">FrontEnd Mentor</a>.
            Coded by <a href="https://github.com/sebafarias" target="_blank">Seba Farías</a>.
        </div>
    )
}
export default Footer