import React from 'react';
import ReactDOM from 'react-dom';
import favIcon from '../images/favicon-32x32.png'
import App from './App';

const icon = document.createElement("link")
icon.setAttribute("type","image/png")
icon.setAttribute("rel","icon")
icon.setAttribute("sizes","32x32")
icon.href = favIcon
document.head.appendChild(icon)

ReactDOM.render(<App/>,document.getElementById('root'));