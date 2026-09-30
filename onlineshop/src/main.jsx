import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../public/Header.jsx';
import './base.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
    </StrictMode>
);