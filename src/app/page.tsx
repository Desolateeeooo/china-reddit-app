"use client"

import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import PostCard from '@/components/Post_Card/PostCard';
import SearchResults from '../components/Navigation/SearchResults/SearchResults';
import styles from './page.module.css';
import { useAppSelector } from '@/hooks/redux';

export default function Home() {
  const { query, results } = useAppSelector((state) => state.search);
  
  // If we're showing search results, don't show regular posts
  const showRegularPosts = !query || results.length === 0;

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navigation />
        
        {/* Show search results if we have a query */}
        {query && <SearchResults />}
        
        {/* Show regular posts when not searching */}
        {showRegularPosts && (
          <div className={styles.postsList}>
            <PostCard />
          </div>
        )}
      </div>
    </div>
  );
}