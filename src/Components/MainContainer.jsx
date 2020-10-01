import React from 'react';

const MainComponents = props => {
    return(
    <main>
        <div className="titles">
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
    const arrow = props.delta >= 0? '../../images/icon-up.svg' : '../../images/icon-down.svg'

    return(
        <div className="highlight-card">
            <div className="left">
                {props.title}
                {props.number}
            </div>
            <div className="right">
                <img src= {socialNetworkIcon} alt={`${props.socialNetwork} icon`}/>
                <div className={`delta ${props.today >= 0? 'positive' : 'negative'}`}>
                    <img src= {arrow} alt={`${props.delta >= 0? 'up' : 'down'} arrow`}/>
                    {props.delta >= 0? props.delta : Math.abs(props.delta) }%
                </div>
            </div>
        </div>
    )
}

export default MainComponents