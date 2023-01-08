import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import Product from './pages/Product';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';


function App() {

const cartItems=useSelector((state)=>state.cartItems)
console.log(cartItems)



  return (
    <div className="App">
    

      <h1>E-commerce</h1>
      <div>
        <h1>cart items:{cartItems.length}</ h1>
       {/* // <h1>cart id:{cartItems[0].id}</ h1> */}
      </div>
      <BrowserRouter>
      <ol>
        <li><Link to='/Product'>Product</Link></li>
        <li><Link to='/Cart'>Cart</Link></li>
        
      </ol>
      <Routes>
        <Route path='/Product'  element={<Product/>} />
        <Route path='/Cart'  element={<Cart/>} />

       
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
