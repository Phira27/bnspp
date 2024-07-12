import React from 'react';
import '../../style.css';
import user from './user'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user-info">
        <img src={user.photo} alt="User Avatar" className="user-avatar" />
        <span className="user-name">{user.name}</span>
      </div>
    </div>
  );
}

export default Navbar;
