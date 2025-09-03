import SubredList from "./SubredList";
import FiltersList from "./FiltersList";

function Subreddits() {
	return (
		<div>
			<h2>Subreddits:</h2>
			<SubredList />
			<FiltersList />
		</div>
	)
}

export default Subreddits;