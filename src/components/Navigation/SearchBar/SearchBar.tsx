import SearchIcon from "./SearchIcon";

function SearchBar() {
	return (
		<div>
			<input
				id="search-bar"
				type="text"
				placeholder="Search for"
			/>
			<SearchIcon />
		</div>
	);
}

export default SearchBar;