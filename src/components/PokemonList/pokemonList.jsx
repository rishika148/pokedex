import { useEffect, useState} from "react";
import axios from 'axios'
import './pokemonList.css'
import Pokemon from "../pokemon/pokemon";
function PokemonList () {

     const [pokemonList, setPokemonList]= useState([])
     const [isLoading , setIsloading] = useState(true)

     async function downloadPokemons() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemonResults = response.data.results;
        console.log (response.data)
        const pokemonResultsPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));


        const pokemonData = await axios.all(pokemonResultsPromise);
        console.log(pokemonData)
        const pokeListResult = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
          return {
            id:pokemon.id,
            name: pokemon.name, 
            image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiney ,
            types:pokemon.types
          }
        });
        console.log(pokeListResult);
        setPokemonList(pokeListResult);
        setIsloading(false);
     }
    useEffect (() => {
      downloadPokemons();
        
    },[]);

    
      return (
        <div className="pokemon-list-wrapper">
           <div>Pokemon List</div>
           {(isLoading) ? 'Loading....' : 
                pokemonList.map((p) => <Pokemon name={p.name} image={p.image}  key={p.id}/>)
           }
        </div>
    )
}
   
export default PokemonList;