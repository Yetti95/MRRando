import '../App.css'
import React from 'react'
import '../components/heros/Hero'
export default function Hero({hero, selectHero}){

    return(
        <React.Fragment>
            <h1>{hero.name}</h1>
        </React.Fragment>
    )
}