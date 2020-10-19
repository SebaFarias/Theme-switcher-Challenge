import React, {useCallback, useContext} from 'react';
import themeContext from '../theme';

const Switcher = ({ on, toggle }) => {

  const theme = useContext(themeContext)
  const onHover = e => {
    document.querySelector('.switch').firstChild.style.color = theme.switcherLabel.color
    document.getElementById('switch').style.background = theme.switchBGHover.background

  }
  const mouseOut = e => {
    document.querySelector('.switch').firstChild.style.color= theme.body.color
    document.getElementById('switch').style.background = theme.switchBG.background
  }

    return(
        <div className='switch' onClick={toggle} onMouseOver={onHover} onMouseOut={mouseOut}> 
            <label htmlFor='switch' onClick={toggle} style={theme.switcherLabel}>Dark Mode</label>
            <button 
              type= 'button'
              name= 'theme switcher'
              role= 'switch'  
              id= 'switch'
              aria-checked={on === true} 
              style={theme.switchBG}
            >
              <div style={theme.thumb}></div>
            </button> 
        </div>
    )
}

export default Switcher
