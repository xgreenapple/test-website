import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='expenses' element={<Expenses />} />
      <Route path='invoices' element={<Invoices />} />
    </Routes>
    
    </BrowserRouter>,
  </React.StrictMode>
);
reportWebVitals();
