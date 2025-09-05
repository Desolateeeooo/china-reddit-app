import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import PostCard from '../components/Post_Card/PostCard';

export default function Home() {
	return (
		<div>
			<Navigation />
			<Sidebar />
			<PostCard />
		</div>
	);
}

