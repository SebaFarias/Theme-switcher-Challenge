import React from 'react';
import './style.css';
import data from '../data/data.json';
import HeaderContainer from './Components/HeaderContainer';
import MainContainer from './Components/MainContainer';
import Attribution from './Components/Attribution';

const App = () => {
    const datasrc = data
    return(
        <div className="App">
            <HeaderContainer data= {datasrc}/>
            <MainContainer data= {datasrc}/>            
            <Attribution/>
        </div>
    )
}

export default App