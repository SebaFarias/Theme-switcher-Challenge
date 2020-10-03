import React from 'react';

const Switcher = ({ on, toggle }) => {

    return(
        <div id='switch'>
            <p>Dark Mode</p>
            <button 
              type= 'button'
              role= 'switch' 
              className={`switch ${on?'dark':'ligth'}-switch`}
              aria-checked={on === true} 
              onClick={toggle}
            ></button> 
        </div>
    )
}

export default Switcher