import React, { useState } from 'react';
import './Header.css';
import avatar from '../image/avatar.png';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="user-menu" onClick={() => setOpen(!open)}>
        <img src={avatar} alt="avatar" className="avatar" />
        <span className={`arrow ${open ? 'up' : 'down'}`}>&#9660;</span>
      </div>
      {open && (
        <div className="dropdown">
          <div className="dropdown-item">My account</div>
          <div className="dropdown-item">My tasks</div>
          <div className="dropdown-item">Log out</div>
        </div>
      )}
    </div>
  );
};
export default Header;