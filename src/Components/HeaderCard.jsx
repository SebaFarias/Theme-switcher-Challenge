import React from 'react'

const HeaderCard = (props) => {

    const socialNetworkIcon = `../../images/icon-${props.socialNetwork}.svg`
    const arrow = props.today >= 0? '../../images/icon-up.svg' : '../../images/icon-down.svg'

    return(
        <div className="header-card">
            <div className="gradient-bar"></div>
            <div className="sm-name">
                <img src= {socialNetworkIcon} alt={`${props.socialNetwork} icon`}/>
                {props.name}
            </div>
            <div className="sm-info">
                <h1>{props.numbers}</h1>
                {props.socialNetwork === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}
            </div>
            <div className={`today ${props.today >= 0? 'positive' : 'negative'}`}>
                <img src= {arrow} alt={`${props.today >= 0? 'up' : 'down'} arrow`}/>
                {props.today >= 0? props.today : Math.abs(props.today) } Today
            </div>
        </div>
    )
}

export default HeaderCard