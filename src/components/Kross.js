import React from 'react'
import s from '../components/Kross.module.scss'
import Search from '../img/search.svg'

export const Kross = () => {
  return (
    <div className={s.kross}>
        <h1>Все кроссовки</h1>
        <img src={Search} alt="" />
        <input type="text" placeholder='Поиск...' />

    </div>
  )
}
