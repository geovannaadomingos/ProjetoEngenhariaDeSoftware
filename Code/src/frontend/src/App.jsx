import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { PrivateRoute } from './privateRoute';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLogged={setIsLogged} />} />
        <Route
          path="/home"
          element={
            <PrivateRoute isLogged={isLogged}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
