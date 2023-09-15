import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './views/Login'
import Home from './views/Home'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuthenticated = () => {
    setIsAuthenticated(true)
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
