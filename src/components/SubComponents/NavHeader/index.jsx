import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavHeader.module.css'

const NavHeader = ({url, children}) => {
  return (
    <Link to = {url} className = {styles.NavHeader}>
      {children}
    </Link>
  )
}

export default NavHeader;