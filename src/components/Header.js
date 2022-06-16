
import React from 'react'
import Logo from '../img/logo.svg'
import Basket from '../img/basket.svg'
import Heart from '../img/heart.svg'
import Login from '../img/login.svg'
import styles from '../components/Header.module.scss'
import {NavLink} from 'react-router-dom'

const header = () => {
  return (
    <div className={styles.header}>
     <div className={styles.logo}>
       <img src={Logo} alt="" />
       </div> 
      
         <div className={styles.block}>
        <NavLink to='basket'> <img src={Basket} alt="" /> </NavLink>
        <p><span>2222 </span>сом.</p>
        <img src={Heart} alt="" />
        <img src={Login} alt="" />
       </div>
       
      
       
        
      

    </div>
  )
}

export default header