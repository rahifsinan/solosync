import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const NavIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='nav-icon' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clipRule="evenodd" />
      </svg>
      {isHovered && (
        <div className="login-form">
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavIcon;
