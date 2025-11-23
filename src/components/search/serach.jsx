import './search.css'
function Search () {
   return(
    <div className="search-wrapper">
        <input
        id="search-pokemon-name"
        type="text"
        placeholder="Pokemon name....."
        />
    </div>
   );
}
export default Search;