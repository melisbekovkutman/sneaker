import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from '../src/components/Header';
import styles from './App.module.scss'
import HomePage from './pages/HomePage';
import Basket from './pages/Basket/Basket';


function App() {
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:3000/db.json')
      const data = await resp.json()
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <BrowserRouter>
            <div className={styles.App}>
          <div className={styles.child}>
              <Header/> 
              <hr/>
              <Routes>
                <Route path='/' element={<HomePage data={data}/>} />
                <Route path='/basket' element={<Basket/>} />
              </Routes>
          </div>
  </div> 

    </BrowserRouter>



  );
}

export default App;
