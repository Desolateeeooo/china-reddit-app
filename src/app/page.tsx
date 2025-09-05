import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import PostCard from '../components/Post_Card/PostCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navigation />
        <PostCard />
      </div>
    </div>
  );
}