import Image from 'next/image';
import SecondaryButton from '../Buttons/SecondaryButton';
import UserLogo from './UserLogo';

function PostCard() {
	return (
		<>
			<div>
				<UserLogo />
				<p>r/China</p>
				<ul>
					<li>18 hours ago</li>
				</ul>
				<h5>Title Title Title Title</h5>
			</div>
			<div>
				<Image 
					src="/public/beijing_image.jpg"
					alt="Beijing picture"
					width={800}
					height={800}
				/>
				<SecondaryButton />
				<SecondaryButton />
			</div>
		</>
	)
}

export default PostCard;