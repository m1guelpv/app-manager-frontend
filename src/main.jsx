import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);