import React from 'react';
import './style.css';
import Attribution from './Components/Attribution';
import Switcher from './Components/Switcher';
import HeaderCard from './Components/HeaderCard';
import Highlight from './Components/HighlightCard'

const App = () => {
    return(
        <div className="App">
            <Switcher/>
            <main>
                <h1>Social Media Dashboard</h1>
                <h3>Total Followers: 23,004</h3>
                <section>
                    <HeaderCard
                        socialNetwork= 'facebook'
                        name= '@nathanf'
                        numbers= '1987'
                        today= '12'
                    />
                    <HeaderCard
                        socialNetwork= 'twitter'
                        name= '@nathanf'
                        numbers= '1044'
                        today= '99'
                    />
                    <HeaderCard
                        socialNetwork= 'instagram'
                        name= '@realnathanf'
                        numbers= '11k'
                        today= '1099'
                    />
                    <HeaderCard
                        socialNetwork= 'youtube'
                        name= 'Nathan F.'
                        numbers= '8239'
                        today= '-144'
                    />
                </section>
            </main>
            <section>
                <h2>Overview - Today</h2>
                <div className="details">
                    <Highlight
                        title= 'Page Views'
                        number= '87'
                        socialNetwork= 'facebook'
                        today= '3'
                    />
                    <Highlight
                        title= 'Likes'
                        number= '52'
                        socialNetwork= 'facebook'
                        today= '-2'
                    />
                    <Highlight
                        title= 'Likes'
                        number= '5462'
                        socialNetwork= 'instagram'
                        today= '2257'
                        />
                    <Highlight
                        title= 'Profile Views'
                        number= '52k'
                        socialNetwork= 'instagram'
                        today= '1375'
                        />                      
                    <Highlight
                        title= 'Retweets'
                        number= '117'
                        socialNetwork= 'twitter'
                        today= '303'
                        />
                    <Highlight
                        title= 'Likes'
                        number= '507'
                        socialNetwork= 'twitter'
                        today= '553'
                        />
                    <Highlight
                        title= 'Likes'
                        number= '107'
                        socialNetwork= 'youtube'
                        today= '-19'
                        />
                    <Highlight
                        title= 'Total Views'
                        number= '1407'
                        socialNetwork= 'youtube'
                        today= '-12'
                    />
                </div>
            </section> 
            <Attribution/>
        </div>
    )
}

export default App