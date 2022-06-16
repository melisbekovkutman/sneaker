import React from 'react'
import s from '../components/Kross2.module.scss'

const Kross2 = ({ data }) => {
  return (
    <div className={s.kross2}>
        {data.map(item => (
            <div className={s.cross}>
              <img className={s.hearts} src={item.img} alt="" />
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <b>Цена:</b>
                <h5>{item.price} сом.</h5>
                <img className={s.plus} src={item.plus} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Kross2