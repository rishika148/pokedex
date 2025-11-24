import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/Pokedex/pokedex";
import PokemonDetails from "../components/pokemonDetails/pokemonDetails";

function CustomRouter () {
    return(
        <Routes>
          <Route path="/" element= {<Pokedex/>}/>
          <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
        </Routes>
    )

}
export default CustomRouter