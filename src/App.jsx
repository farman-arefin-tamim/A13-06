import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stat from './components/Stat/Stat'
import Products from './components/Products/Products'
import Steps from './components/Steps/Steps'

const fetchData = async()=>{
  const res = await fetch('/data.json');
  return res.json();
};



function App() {
  const dataPromise = fetchData();
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <Suspense>
        <Products dataPromise={dataPromise} cart={cart} setCart={setCart}></Products>
      </Suspense>
      <Steps></Steps>
    </>
  )
}

export default App
