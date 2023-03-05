import React from 'react';
import { BrowserRouter , Route ,Routes} from 'react-router-dom';
import Cart from './Cart';
import HomePage from './HomePage';
import TanikaPosts from './TanikaPosts';

const App = () => (
  <>
  <BrowserRouter>
    <Routes>
    <Route index element={<HomePage/> } />
    {/* <Route path="mb" element={< />}></Route> */}
    <Route path="cart" element={<Cart />}></Route>
   </Routes>
</BrowserRouter>
  </>
);

export default App;

