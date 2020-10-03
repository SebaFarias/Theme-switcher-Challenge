import React from 'react';

const MainComponents = props => {
    return(
    <main>
        <div className="title">
            <h2>Overview - Today</h2>
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
                    />
                )
            })}
        </div>
    </main>
    )
}

const HighlightCard = props => {

    const socialNetworkIcon = `../../images/icon-${props.socialNetwork}.svg`
    const arrowURL = props.today >= 0? '../../images/icon-up.svg' : '../../images/icon-down.svg'
    const shorten = number => {
        if(number > 999999) return `${Math.floor(number / 1000000)}m`
        return number > 9999 ? `${Math.floor(number / 1000)}k`: number.toString()
    }

    return(
        <div className="highlight-card">
            <div className="left-up">{props.title}</div>
            <img src= {socialNetworkIcon} alt={`${props.socialNetwork} icon`}/>
            <div className="left-down">{shorten(props.number)}</div>
            <div className={['delta' , props.today >= 0? 'positive' : 'negative'].join(' ')}>
                <img src= {arrowURL} alt={`${props.today >= 0? 'up' : 'down'} arrow`}/>
                {`${Math.abs(props.today)}%`}
            </div>
        </div>
    )
}

export default MainComponents