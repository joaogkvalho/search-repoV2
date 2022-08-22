import { useContext } from 'react';
import { UserContext } from './contexts/userContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { UserPage } from './pages/UserPage';

function App() {
  const { userInfo } = useContext(UserContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  )
}

export default App