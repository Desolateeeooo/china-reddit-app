import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://www.reddit.com/r/China/new.json');
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Reddit API responded with status: ${response.status}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    // Extract the posts from the response
    const posts = data.data.children.map((child: any) => ({
      id: child.data.id,
      title: child.data.title,
      author: child.data.author,
      subreddit: child.data.subreddit,
      url: child.data.url,
      thumbnail: child.data.thumbnail,
      created_utc: child.data.created_utc,
      num_comments: child.data.num_comments,
      ups: child.data.ups,
      selftext: child.data.selftext,
      permalink: child.data.permalink
    }));
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching from Reddit API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Reddit' },
      { status: 500 }
    );
  }
}