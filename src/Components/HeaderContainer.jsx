import React from 'react';
import Switcher from './Switcher';

const HeaderContainer = props => {
    return(
        <section>
            <header>
                <div className="titles">
                    <h1>Social Media Dashboard</h1>
                    <h3>Total Followers: 23,004</h3>
                </div>
                <Switcher/>
            </header>
            <div className="header-cards">
                {props.data.general.map( (item,index) =>{
                    return(
                        <HeaderCard
                            key= {`${item.socialNetwork}-${index}`}
                            socialNetwork= {item.socialNetwork}
                            name= {item.name}
                            numbers= {item.numbers}
                            today= {item.today}
                        />
                    )
                })}
            </div>
        </section>
    )
}

const HeaderCard = (props) => {

    const socialNetworkIcon = `../../images/icon-${props.socialNetwork}.svg`
    const arrow = props.today >= 0? '../../images/icon-up.svg' : '../../images/icon-down.svg'

    return(
        <div className="header-card">
            <div className={`gradient-bar ${props.socialNetwork}`}></div>
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

export default HeaderContainer