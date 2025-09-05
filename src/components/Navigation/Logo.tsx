import Image from "next/image";

function Logo() {
	return (
		<div>
			<Image
				src="/public/logo.png"
				alt="China-Reddit Logo"
				width={500}
				height={500}
				priority
			/>
		</div>
	)
}

export default Logo