import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const subreddit = searchParams.get('subreddit') || 'china';
    
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/new.json`);
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Reddit API responded with status: ${response.status}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts = data.data.children.map((child: any) => {
      // Get higher quality image
      let imageUrl = child.data.thumbnail;
      const preview = child.data.preview;
      
      // Use higher resolution image from preview if available
      if (preview && preview.images && preview.images[0] && preview.images[0].source) {
        imageUrl = preview.images[0].source.url.replace(/&amp;/g, '&');
      }
      // For i.redd.it images, try to get the full resolution
      else if (child.data.url.includes('i.redd.it') && !child.data.is_video) {
        imageUrl = child.data.url;
      }
      // For external images, use the URL directly
      else if (child.data.url_overridden_by_dest && 
               (child.data.url_overridden_by_dest.includes('.jpg') || 
                child.data.url_overridden_by_dest.includes('.png'))) {
        imageUrl = child.data.url_overridden_by_dest;
      }
      
      return {
        id: child.data.id,
        title: child.data.title,
        author: child.data.author,
        subreddit: child.data.subreddit,
        url: child.data.url,
        thumbnail: imageUrl,
        created_utc: child.data.created_utc,
        num_comments: child.data.num_comments,
        ups: child.data.ups,
        selftext: child.data.selftext,
        permalink: child.data.permalink,
        is_video: child.data.is_video,
        post_hint: child.data.post_hint,
        domain: child.data.domain
      };
    });
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching from Reddit API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Reddit' },
      { status: 500 }
    );
  }
}