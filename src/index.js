// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

// Pages
import Tables from './pages/Tables';
import Table from './pages/Table';
import Order from './pages/Order';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';

// Style
import './styles/RootStyle.css';

// Router
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="tables">
          <Route index element={<Tables />}/>
          <Route path=":tableNo" element={<Table />} />
        </Route>

        <Route path="order">
          <Route index element={<Order />} />
        </Route>

        <Route path="admin">
          <Route index element={<Login />} />
          <Route path="login" element={<Login/>}/>
          <Route path="panel" element={<Admin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
);