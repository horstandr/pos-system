// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

// Pages
import Tables from '../src/pages/Tables';
import Table from '../src/pages/Table';
import Order from '../src/pages/Order';
import Home from '../src/pages/Home';
import Admin from '../src/pages/Admin';
import Login from '../src/pages/Login';

import NavBar from '../src/components/NavBar';

// Style
import './styles/RootStyle.css';

// Router
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <NavBar/>
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