import Search from "../search/serach";
import './pokedex.css';
import PokemonList from "../PokemonList/pokemonList";
function Pokedex () {
    return (
        <div className="pokedex-wrapper">
            
            <Search/>
            <PokemonList/>
        </div>
    )
}
export default Pokedex;