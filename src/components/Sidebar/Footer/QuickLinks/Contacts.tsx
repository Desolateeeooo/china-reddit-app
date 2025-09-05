import Image from 'next/image';
function Contacts() {
	return (
		<div>
			<h3>Contact me:</h3>
			<ul>
				<Image
					src="/public/telegram.svg"
					alt="Telegram icon"
					width={200}
					height={200}
				/>
				<Image
					src="/public/github.svg"
					alt="GitHub icon"
					width={200}
					height={200}
				/>
				<Image
					src="/public/discord.svg"
					alt="Discord icon"
					width={200}
					height={200}
				/>
			</ul>


		</div>
	)
}

export default Contacts;