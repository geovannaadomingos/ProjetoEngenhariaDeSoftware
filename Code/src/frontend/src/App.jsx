import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
