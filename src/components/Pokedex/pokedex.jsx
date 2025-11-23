import Search from "../search/serach";
import './pokedex.css';
import PokemonList from "../PokemonList/pokemonList";
function Pokedex () {
    return (
        <div className="pokedex-wrapper">
            <h1 id="pokedex-heading">Pokedex</h1>
            <Search/>
            <PokemonList/>
        </div>
    )
}
export default Pokedex;