import React from 'react';
import IPost from './../../src/interfaces/post';

export const UserOverview: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div>
      <ul>
        <li>{post.text}</li>
        <li>{post.image}</li>
        <li>{post.user}</li>
        <li>Created at: {post.createdAt.toISOString()}</li>
      </ul>
      <br />
    </div>
  );
};