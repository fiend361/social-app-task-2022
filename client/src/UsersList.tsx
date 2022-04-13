import React from 'react';
import { UserOverview } from './UserOverview';

import IUser from './../../src/interfaces/user';

export const UserList: React.FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <div>
      <h1>Users List</h1>
      {users.map(user => (
        <UserOverview user={user} />
      ))}
    </div>
  );
};

