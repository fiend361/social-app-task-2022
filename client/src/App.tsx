import React from 'react';
import { UserList } from './UsersList';

import IUser from './../../src/interfaces/user';

import './App.css';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
