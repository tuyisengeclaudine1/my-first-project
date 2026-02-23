import React from "react";
import Fruit from "./Fruit.jsx";
export function Cart({ showCart }) {
  return (
    <div>
 {showCart && (
      <div className="relative z-50">
   <Fruit/>
   </div>
  )}
</div>
  );
}
export default Cart;




