import '../App.css'
import React from 'react'
import '../components/heros/Hero'
import PlayerList from '../components/players/PlayerList'
export default function HeroSelect({players, selectHero}){
    const [heroes, setHeroes] = React.useState()
    // React.useEffect(()=>{
        
    // }, [])
    function handleSelectHeroe(heroe) {
        setHeroes(heroes.filter(h => h.name!==heroe.name))
    }
    return(
        <div>
            <PlayerList players={players} />
            <br />
            {heroes.map(hero => {
                <Hero hero={hero} selectHero={handleSelectHeroe} />
            })}
        </div>
    )
}