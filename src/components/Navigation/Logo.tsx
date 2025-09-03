import Image from "next/image";

function Logo() {
	return (
		<div>
			<Image
				src="/logo.png"
				alt="China-Reddit Logo"
				width={500}
				height={500}
				priority
			/>
		</div>
	)
}

export default Logo