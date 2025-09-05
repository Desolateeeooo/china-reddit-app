function FiltersList() {
	return (
		<div>
			<h2>Filters:</h2>
			<ul>
				<li>
					<form>
						<label htmlFor="time">Time:</label>
						<select id="time" name="time">
							<option value="pizza">Day</option>
							<option value="curry">Week</option>
							<option value="salad">Month</option>
							<option value="ramen">Year</option>
							<option value="tacos">{">Year"}</option>
						</select>
					</form>
				</li>
			</ul>
		</div>
	)
}

export default FiltersList;