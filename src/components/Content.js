import React from 'react'
import Sneaker from '../img/sneaker.svg'
import s from '../components/Content.module.scss'

const Content = () => {
  return (
    <div className={s.content}>
        <img src={Sneaker} alt="" />
        
    </div>
  )
}

export default Content