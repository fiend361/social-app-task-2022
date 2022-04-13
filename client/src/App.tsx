import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserList } from './UsersList';
import { UserDetails } from './UserDetails';
import { PostsList } from './postsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/posts" element={<PostsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
