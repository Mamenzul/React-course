import Header from "./components/Header/Header";
import CartProvider from "./store/CartProvier";
import MealsSummary from "./components/Meal/MealsSummary";
import AvailableMeals from "./components/Meal/AvailableMeals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const cartButtonClick = () => {
    setDisplayModal(true);
  }
  const closeCart = () => {
    setDisplayModal(false);
  }
  return (
    <CartProvider>
      <Header cartButtonClick={cartButtonClick}/>
      {displayModal && <Cart closeCart={closeCart}></Cart>}
      <MealsSummary/>
      <AvailableMeals/>
    </CartProvider>
  );
}

export default App;
