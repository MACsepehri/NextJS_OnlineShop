import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../public/Header.jsx';
import './base.css';
import App from './App.jsx'; 

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <App />
        </BrowserRouter>
    </StrictMode>
);