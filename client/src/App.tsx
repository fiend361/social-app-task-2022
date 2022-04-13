import React from 'react';
import axios from 'axios';
import { UserList } from './UsersList';

import IUser from './../../src/interfaces/user';

import './App.css';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([]);
  
  React.useEffect(() => {
    axios.get('https://social-app-acm.herokuapp.com/users')
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
