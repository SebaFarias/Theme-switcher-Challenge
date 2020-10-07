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
const fonts = document.createElement('link')
fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' 
fonts.setAttribute('rel','stylesheet')
document.head.appendChild(fonts)

ReactDOM.render(<App/>,document.getElementById('root'));