import React from 'react';
import axios from 'axios';

import { PostOverview } from './PostOverview';

import IPost from './../../src/interfaces/post';

export const PostsList: React.FC<{ userId?: string }> = ({ userId }) => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  
  React.useEffect(() => {
    if (userId) {
      axios.get(`https://social-app-acm.herokuapp.com/posts?user=${userId}`)
        .then(res => {
          setPosts(res.data);
        });
    } else {
      axios.get('https://social-app-acm.herokuapp.com/posts')
        .then(res => {
          setPosts(res.data);
        });
    }
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <PostOverview post={post} />
      ))}
    </div>
  );
};

