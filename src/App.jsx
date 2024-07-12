import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Index from './index'; // Import komponen index.jsx yang telah diperbaiki
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Index />
        </div>
      </div>
    </Router>
  );
}
