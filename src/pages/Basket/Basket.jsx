import React from 'react'
import s from '../Basket/Basket.module.scss'
import Smail from '../../img/smail.svg'
import {NavLink} from 'react-router-dom'

const Basket = () => {
  return (
    <div className={s.basket}>
        <img src={Smail} alt="" />
        <h1>У вас нет заказов</h1>
        <span>Вы нищеброд? <br></br>Оформите хотя бы один заказ.</span>
        <NavLink to="/"><button> Вернуться назад</button></NavLink>
    </div>
  )
}

export default Basket