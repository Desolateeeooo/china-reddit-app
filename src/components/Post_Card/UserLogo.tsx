import Image from "next/image"

function UserLogo() {
	return(
		<Image 
			src="/public/user_logo_1.svg"
			alt="User Logo icon"
			width={45}
			height={45}
		/>
	)
}

export default UserLogo