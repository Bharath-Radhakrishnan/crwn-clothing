import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length?cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        }):<span className="empty-message">Your Cart is Empty</span>}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems:selectCartItems(state),
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(CartDropdown);
