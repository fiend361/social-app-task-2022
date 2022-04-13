import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import IUser from './../../src/interfaces/user';

import { UserOverview } from './UserOverview';
import { PostsList } from './postsList';

export const UserDetails: React.FC = () => {
  let { userId } = useParams();
  const [user, setUser] = React.useState<IUser>({name: "null", email: "null", createdAt: "null"} as IUser);

  React.useEffect(() => {
    axios.get(`https://social-app-acm.herokuapp.com/users/${userId}`)
      .then(res => {
        setUser(res.data);
      });
  }, []);

  return (
    <div>
      <UserOverview user={user} />
      <PostsList userId={userId} />
    </div>
  );
};