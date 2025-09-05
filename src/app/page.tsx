import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
	return (
		<div>
			<Navigation />
			<Sidebar />
		</div>
	);
}

