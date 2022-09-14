const getValidItemUrl = (endpoint) => `https://api.mercadolibre.com/items/${endpoint}`;

const fetchItem = async (id) => {
  if (!id) {
    throw new Error('You must provide an url'); 
  }
  const url = getValidItemUrl(id);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}