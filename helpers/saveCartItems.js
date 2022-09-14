const saveCartItems = (cartItem, atualCart) => {
  const listCarItems = [...atualCart, cartItem];
  localStorage.setItem('cartItems', JSON.stringify(listCarItems));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
