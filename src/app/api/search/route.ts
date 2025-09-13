import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const subreddit = searchParams.get('subreddit') || '';
    const sort = searchParams.get('sort') || 'relevance';
    const timeFilter = searchParams.get('t') || 'all';
    
    // Build the Reddit search URL
    let redditUrl = 'https://www.reddit.com/search.json?';
    redditUrl += `q=${encodeURIComponent(query)}`;
    redditUrl += `&sort=${sort}`;
    
    if (timeFilter !== 'all') {
      redditUrl += `&t=${timeFilter}`;
    }
    
    if (subreddit) {
      redditUrl += `&restrict_sr=on`;
      // If searching in a specific subreddit, modify the query
      redditUrl = `https://www.reddit.com/r/${subreddit}/search.json?${redditUrl.split('?')[1]}`;
    }
    
    const response = await fetch(redditUrl);
    
    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform the data
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
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
}