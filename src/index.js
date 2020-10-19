import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const fonts = document.createElement('link')
fonts.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' 
fonts.setAttribute('rel','stylesheet')
document.head.appendChild(fonts)

ReactDOM.render(<App/>,document.getElementById('root'));