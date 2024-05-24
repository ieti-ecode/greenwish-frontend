import React from 'react';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/AdminPage';
import ClientPage from './pages/ClientPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Cliente</Link>
            </li>
            <li>
              <Link to="/admin">Administrador</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ClientPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
