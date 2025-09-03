import Image from "next/image";

function SearchIcon() {
	return (
		<div>
			<Image
				src="/public/icons/search-icon.svg"
				alt="Search Icon"
				width={250}
				height={250}
			/>
		</div>
	)
}

export default SearchIcon