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
    const arrow = props.today >= 0? '../../images/icon-up.svg' : '../../images/icon-down.svg'

    return(
        <div className="highlight-card">
            <div className="left-up">{props.title}</div>
            <img src= {socialNetworkIcon} alt={`${props.socialNetwork} icon`}/>
            <div className="left-down">{props.number}</div>
            <div className={`delta ${props.today >= 0? 'positive' : 'negative'}`}>
                <img src= {arrow} alt={`${props.today >= 0? 'up' : 'down'} arrow`}/>
                {`${Math.abs(props.today)}%`}
            </div>
        </div>
    )
}

export default MainComponents