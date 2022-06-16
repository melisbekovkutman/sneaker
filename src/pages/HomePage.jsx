import React from 'react'
import Content from '../components/Content'
import { Kross } from '../components/Kross'
import Kross2 from '../components/Kross2'

const HomePage = ({data}) => {
  return (
    <div>
        <Content/>
        <Kross/>
        <Kross2 data={data}/>
    </div>
  )
}

export default HomePage