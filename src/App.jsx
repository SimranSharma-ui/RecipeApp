import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Recipes from './Componants/Recipes';
import Navbar from './Componants/Navbar';
import Home from './Componants/Home';
import DetailRecipe from './Componants/DetailRecipe';
import About from './Componants/About';
import Contact from './Componants/Contact';
import Footer from './Componants/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/Recipes' element={<Recipes/>} ></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/DetailRecipes/:id' element={<DetailRecipe/>} ></Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  )
}

export default App;