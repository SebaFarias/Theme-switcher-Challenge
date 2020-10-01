import React, { useState, useEffect } from 'react';

const Switcher = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.classList.remove("dark","light")
    document.body.classList.add(mode)
  });

    return(
        <div id={`${mode}-switch`} onClick={ () => setMode( mode === "light"? "dark" : "light" )}>
            <h6>{`${mode.substring(0,1).toUpperCase()}${mode.substring(1)} Mode`}</h6>
            <div className={`${mode}-switch`}></div> 
        </div>
    )
}

export default Switcher