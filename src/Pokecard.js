import React from 'react';
import './Pokecard.css';

const POKEMON_API = "https://raw.githubusercontent.com/" +
"PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({base_experience, id, name, type}) {
    const imageSource = `${POKEMON_API}${id}.png`;

    return (
        <div className = 'Pokecard'>
            <div className = 'Pokecard-title'>{name}</div>
            <img className='Pokecard-image' src={imageSource} alt={name}/>
            <div className='Pokecard-data'>Type: {type}</div>
            <div className='Pokecard-data'>EXP: {base_experience}</div>
        </div>
    )
}

export default Pokecard;