import Ecom from './ECOM'
import { Provider } from "react-redux";
import store from "./redux/store";
import Checkout from './ECOM/Checkout'
// import Adder from './Components/Adder';
import FilterModal from './ECOM/FilterModal'

function App() {
  return (
   <>
   <Provider store={store} >
      {/* <FilterModal /> */}
      <Ecom />
      {/* <Checkout /> */}
      {/* <Adder /> */}
   </Provider>
   </>
  );
}

export default App;
