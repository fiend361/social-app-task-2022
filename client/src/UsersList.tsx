import React from 'react';
import axios from 'axios';

import { UserOverview } from './UserOverview';

import IUser from './../../src/interfaces/user';

export const UserList: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  
  React.useEffect(() => {
    axios.get('https://social-app-acm.herokuapp.com/users')
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map(user => (
        <UserOverview user={user} />
      ))}
    </div>
  );
};

