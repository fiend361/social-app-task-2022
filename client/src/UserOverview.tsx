import React from 'react';
import IUser from './../../src/interfaces/user';

import { useNavigate } from 'react-router-dom';

export const UserOverview: React.FC<{ user: IUser }> = ({ user }) => {
  let navigate = useNavigate();

  return (
    <div>
      <strong>User {user.name.split(" ")[0]}</strong>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Created at: {user.createdAt}</li>
      </ul>
      <button onClick={() => {
          navigate(`/users/${user._id}`);
        }}>Go to User</button>
    </div>
  );
};