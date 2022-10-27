import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Features from './Components/Features';
import Product from './Components/Product';
import Catagory from './Components/Catagory';
import Review from './Components/Review';
import Blogs from './Components/Blogs';
import Topfooter from './Components/Topfooter';
import Bottom from './Components/Bottom';
import { Routes,Route,Router } from 'react-router-dom';
import Veg from './Components/Shop/Veg';
import Dairy from './Components/Shop/Dairy';
import Meat from './Components/Shop/Meat';
import Fruits from './Components/Shop/Fruits';


function App() {
  return (
   <div>
    

    <Header/>
    <Slider/>
    <Routes>
      <Route  path='/shop1'element={<Veg/> } ></Route>
      <Route path='/shop2'element={<Dairy/>}></Route>
      <Route path='/shop3'element={<Meat/>}></Route>
      <Route path='/shop4'element={<Fruits/>}></Route>
    </Routes>

    <Features/>
    <Product/>
    <Catagory/>
    <Review/>
    <Blogs/>
    <Topfooter/>
    <Bottom/>
    
    </div>
  );
}

export default App;

