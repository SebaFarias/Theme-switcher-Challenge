import React, {useCallback, useContext} from 'react';
import themeContext from '../theme';

const Switcher = ({ on, toggle }) => {

  const theme = useContext(themeContext)

    return(
        <div className={['switch',`${theme.name}-switch`].join(' ')} onClick={toggle}> 
            <label htmlFor='switch'>Dark Mode</label>
            <button 
              type= 'button'
              name= 'theme switcher'
              role= 'switch'  
              id= 'switch'
              aria-checked={on === true} 
            ></button> 
        </div>
    )
}

export default Switcher