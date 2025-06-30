import React from 'react';
import ReactDOM from 'react-dom/client';
import Tables from './pages/Tables';
import Table from './pages/Table';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import './styles/RootStyle.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        
        <Route path="/tables">
          <Route index element={<Tables />}/>
          <Route path=":tableNo" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
);