import { useEffect, useState} from "react";
import axios from 'axios'
import './pokemonList.css'
import Pokemon from "../pokemon/pokemon";
function PokemonList () {

     const [pokemonList, setPokemonList]= useState([])
     const [isLoading , setIsloading] = useState(true)

     const [pokedecUrl, setPokedexUrl] = useState ('https://pokeapi.co/api/v2/pokemon');

     const [nextUrl,setNextUrl] = useState('')
     const [prevUrl,setprevUrl] = useState('')


     async function downloadPokemons() {
        setIsloading(true)
        const response = await axios.get(pokedecUrl)
        const pokemonResults = response.data.results;
        console.log (response.data)
        setNextUrl (response.data.next)
        setprevUrl (response.data.previous)

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
        
    },[pokedecUrl]);

    
      return (
        <div className="pokemon-list-wrapper">
           <div>Pokemon List</div>
           <div className="pokemon-wrapper">
                {(isLoading) ? 'Loading....' : 
                   pokemonList.map((p) => <Pokemon name={p.name} image={p.image}  key={p.id}/>)
                }
           </div>
           <div className="controls">
            <button disabled ={prevUrl === undefined} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
            <button disabled ={nextUrl === undefined} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
           </div>
        </div>
    )
}
   
export default PokemonList;