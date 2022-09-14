const getValidUrl = (endpoint) => `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;
const fetchProducts = async (endpoint) => {
  if (!endpoint) {
    throw new Error('You must provide an url'); 
  }
  const url = getValidUrl(endpoint);
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
