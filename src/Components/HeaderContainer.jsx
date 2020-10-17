import React, {useContext}  from 'react';
import { Math } from 'core-js';
import Switcher from './Switcher';
import themeContext from '../theme';
import '../styles/header.css'
import '../styles/header-cards.css'

const HeaderContainer = props => {
    const theme = useContext(themeContext)
    const totalNumber = props.data.general.reduce( (acc,item) => { 
        return acc + item.numbers;
    },0)

    return(
        <section className='header-container'>
            <header>
                <div className="titles">
                    <h1 style={theme.textPrimary}>Social Media Dashboard</h1>
                    <h3>Total Followers:{
                        totalNumber.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }</h3>
                </div>
                <Switcher on={props.state} toggle= {props.toggler}/>
            </header>
            <div className="header-cards">
                {props.data.general.map( (item,index) =>{
                    return(
                        <HeaderCard
                            key= {`${index}-${item.socialNetwork}`}
                            id= {`${index}-${item.socialNetwork}`}
                            socialNetwork= {item.socialNetwork}
                            name= {item.name}
                            numbers= {item.numbers}
                            today= {item.today}
                            logo={props.img[item.socialNetwork]}
                            arrow = {item.today >= 0? props.img.upArrow : props.img.downArrow}
                        />
                    )
                })}
            </div>
        </section>
    )
}

const HeaderCard = (props) => {
    const theme = useContext(themeContext)
    const socialNetworkIcon = props.logo
    const arrow = props.arrow
    const shorten = number => {
        if(number > 999999) return `${Math.floor(number / 1000000)}m`
        return number > 9999 ? `${Math.floor(number / 1000)}k`: number.toString()
    }
    const onHover = () => {
        const card = document.getElementById(props.id)
        card.style.background = theme.cardHover.background
    }
    const mouseOut = () => {
        const card = document.getElementById(props.id)
        card.style.background = theme.cardBG.background
    }

    return(
        <div className='header-card' id={props.id} style={theme.cardBG} onMouseOver={onHover} onMouseOut={mouseOut}>
            <div className={['top-bar', props.socialNetwork].join(' ')}></div>
            <div className="sm-name">
                <img className="sm-logo" src= {socialNetworkIcon} alt={`${props.socialNetwork} icon`}/>
                <div className='sm-nick'>{props.name}</div> 
            </div>
            <div className="sm-info">
                <h1 className= 'sm-number' style={theme.textPrimary}>{shorten(props.numbers)}</h1>
                <div className='sm-users' >{props.socialNetwork === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}</div>
            </div>
            <div className={['today', props.today >= 0? 'positive' : 'negative'].join(' ')}>
                <img src= {arrow} alt={`${props.today >= 0? 'up' : 'down'} arrow`}/>
                { `${Math.abs(props.today)} Today` }
            </div>
        </div>
    )
}

export default HeaderContainer