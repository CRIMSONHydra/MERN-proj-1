import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Journal from './pages/Journal';
import Auth from './pages/Auth';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Journal />} />
          </Route>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;