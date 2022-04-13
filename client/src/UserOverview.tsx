import React from 'react';
import IUser from './../../src/interfaces/user';

export const UserOverview: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <div>
      <strong>User {user.name.split(" ")[0]}</strong>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Created at: {user.createdAt}</li>
      </ul>
    </div>
  );
};