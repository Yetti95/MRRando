import React from 'react'
export default function Hero({hero, selectHero}){

    return(
        <React.Fragment>
            <h1>{hero.name}</h1>
        </React.Fragment>
    )
}