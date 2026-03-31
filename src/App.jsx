import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import Stat from './components/Stat/Stat'
import Products from './components/Products/Products'

const fetchData = async()=>{
  const res = await fetch('/data.json');
  return res.json();
};



function App() {
  const dataPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stat></Stat>
      <Suspense>
        <Products dataPromise={dataPromise}></Products>
      </Suspense>
      {/* <Suspense>
        <Card dataPromise={dataPromise}></Card>
      </Suspense> */}
    </>
  )
}

export default App
