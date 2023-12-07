import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Users from './features/users/Users';
import Home from './features/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
