function LanguageButton() {
	return (
		<div>
			<form>
				<label htmlFor="lang-btn">Language:</label>
				<select id="lang" name="lang">
					<option value="pizza">English</option>
					<option value="curry">Russian</option>
				</select>
			</form>
		</div>
	)
}

export default LanguageButton;