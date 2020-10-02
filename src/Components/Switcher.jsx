import React, { useState, useEffect } from 'react';

const Switcher = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.classList.remove("dark","light")
    document.body.classList.add(mode)
  });

    return(
        <div id='switch'>
            <p>{`${mode.substring(0,1).toUpperCase()}${mode.substring(1)} Mode`}</p>
            <button 
              role='switch' 
              className={`switch ${mode}-switch`}
              aria-checked={mode === "light"} 
              onClick={ () => setMode( mode === "light"? "dark" : "light" )}
            ></button> 
        </div>
    )
}

export default Switcher