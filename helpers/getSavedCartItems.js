const getSavedCartItems = (carItems) => localStorage.getItem(carItems);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
