import React, {useState, useContext} from 'react';
import themeContext from '../theme';

const MainComponents = props => {
    const theme = useContext(themeContext)
    return(
        <main>
        <div className="title">
            <h2 style={theme.textPrimary}>Overview - Today</h2>
        </div>
        <div className="main-cards">
            {props.data.detail.map( (item,index) =>{
                return(                    
                    <HighlightCard
                    key= {`${item.socialNetwork}-${index}`}
                    title= {item.title}
                    number= {item.number}
                    socialNetwork= {item.socialNetwork}
                    today= {item.today}
                    logo={props.img[item.socialNetwork]}
                    arrow = {item.today >= 0? props.img.upArrow : props.img.downArrow}
                    />
                    )
                })}
        </div>
    </main>
    )
}

const HighlightCard = props => {
    
    const theme = useContext(themeContext)
    const shorten = number => {
        if(number > 999999) return `${Math.floor(number / 1000000)}m`
        return number > 9999 ? `${Math.floor(number / 1000)}k`: number.toString()
    }

    return(
        <div className={['highlight-card',`${theme.name}-card`].join(' ')}>
            <div className="left-up">{props.title}</div>
            <img src= {props.logo} alt={`${props.socialNetwork} icon`}/>
            <div className="left-down" style={theme.textPrimary}>{shorten(props.number)}</div>
            <div className={['delta' , props.today >= 0? 'positive' : 'negative'].join(' ')}>
                <img src= {props.arrow} alt={`${props.today >= 0? 'up' : 'down'} arrow`}/>
                {`${Math.abs(props.today)}%`}
            </div>
        </div>
    )
}

export default MainComponents