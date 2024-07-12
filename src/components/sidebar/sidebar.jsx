import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css'; 

function Sidebar() {
  return (
    <div className="sidebar bg-black p-4 h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold text-white">Menu</h2>
        <ul>
          <li className="hover:bg-gray-800 px-2 py-1 rounded">
            <Link to="/arsip">Arsip</Link>
          </li>
          <li className="hover:bg-gray-800 px-2 py-1 rounded">
            <Link to="/kategori-surat">Kategori Surat</Link>
          </li>
          <li className="hover:bg-gray-800 px-2 py-1 rounded">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p>Karangduren</p>
      </div>
    </div>
  );
}

export default Sidebar;
