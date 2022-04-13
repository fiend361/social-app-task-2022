import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserList } from './UsersList';
import IUser from './../../src/interfaces/user';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
