import React from "react";
import { connect } from "react-redux";
import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart.actions";
// import { connect } from "react-redux";
function CollectionItem({ item, addItem }) {
  const { id, name, imageUrl, price } = item;
  const handleClick = () => {
    console.log("clicked", item);
    addItem(item);
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={handleClick}>
        Add to cart
      </CustomButton>
    </div>
  );
}
// const mapStateToProps = ({
//   user: { currentUser },
//   cart: { hidden, addItem },
// }) => ({
//   currentUser,
//   hidden,
//   addItem,
// });
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
