export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  console.log("exists", cartItemExists);
  if (cartItemExists) {
    cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
