import Ecom from './ECOM'
import { Route, Routes } from 'react-router-dom';
import Checkout from './ECOM/Checkout'
// import Adder from './Components/Adder';
import FilterModal from './ECOM/FilterModal'
import ProductPage from './ECOM/PrductPage';

function App() {
  return (
   <>
      
   <Routes> 
      <Route path='/' exact element={<Ecom />} />
      <Route path='/checkout/' exact element={<Checkout />} />
      <Route path='/product/:id' exact element={<ProductPage />} />
      {/* <FilterModal /> */}
      {/* <Adder /> */}
    </Routes>
   </>
  );
}

export default App;