import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemonDetails.css'

function PokemonDetails () {
    const {id} = useParams();
    const [Pokemon , setPokemon] = useState({});
    async function  downloadPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon ({
            name: response.data.name ,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        })
    }

    useEffect(() => {
        downloadPokemons();
    },[])
    return (
        <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={Pokemon.image}/>
            <div className="pokemon-details-name"> <span>{Pokemon.name}</span></div>
            <div className="pokemon-details-name">Weight : {Pokemon.weight}</div>
            <div className="pokemon-details-name">Height : {Pokemon.height}</div>
            <div className="pokemon-details-type">
                {Pokemon.types && Pokemon.types.map((t) => <div key={t}> {t} </div>)}
            </div>
        </div>
    )
}
export default PokemonDetails;