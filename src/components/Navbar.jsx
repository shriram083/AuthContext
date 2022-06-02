import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext';
import WishList from './WishList';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const {isUser, login, logout} = useContext(AuthContext);
  const {isDark, dark, light } = useContext(ThemeContext);

  const handleClick = () => {
    if(!isUser){login()}
    else{logout()}
  };

  const handleTheme = () => {
    if(!isDark){dark()}
    else{light()}
  };

  return (
    <div className={styles.navbar}>
        Navbar
        <button onClick={handleClick}>{!isUser ? "Login":"Logout"}</button>
        <button onClick={handleTheme}>{!isDark ? "Dark Mode":"Light Mode"}</button>
        <WishList />
    </div>
  )
}

export default Navbar