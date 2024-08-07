import React from 'react';
import ReactDOM from 'react-dom/client';
import { SupabaseProvider } from './integrations/supabase/index.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
      <App />
    </SupabaseProvider>
  </React.StrictMode>,
);