import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart.actions";
import "./checkout-item.scss";

function CheckoutItem({ cartItem, removeItem }) {
  const { id, imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItem(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
