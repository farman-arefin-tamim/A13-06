import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Stat from './components/Stat/Stat'
import Products from './components/Products/Products'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import Workflow from './components/Workflow/Workflow'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const fetchData = async()=>{
  const res = await fetch('/data.json');
  return res.json();
};



function App() {
  const dataPromise = fetchData();
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState("products");
  
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <Suspense>
        <Products dataPromise={dataPromise} cart={cart} setCart={setCart} active={active} setActive={setActive}></Products>
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
