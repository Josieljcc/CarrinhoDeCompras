const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const emptyCart = document.querySelector('.empty-cart');
const totalContainer = document.querySelector('.total-container');
const searchButton = document.querySelector('.search-button');
const inputSearch = document.querySelector('#inp');
const numberCartItem = document.querySelector('.number-cart-item');

const clearStorage = () => localStorage.removeItem('cartItems');

const calculateTotal = (cart) => cart.reduce((acc, curr) => acc + curr.price, 0).toLocaleString(
  'pt-br',
  { style: 'currency', currency: 'BRL' },
);

const updateNumberCartItems = () => {
  const cart = JSON.parse(getSavedCartItems('cartItems'));
  if (!cart) {
    numberCartItem.classList.toggle('hiden');
    return;
  }
  numberCartItem.classList.remove('hiden');
  numberCartItem.classList.add('show');
  console.log(cart.length);
  numberCartItem.innerText = cart.length;
  console.log('oi');
};

const refreshTotal = () => {
  if (Object.prototype.hasOwnProperty.call(localStorage, 'cartItems')) {
    const cart = JSON.parse(getSavedCartItems('cartItems'));
    if (cart) {
      const totalPriceElement = document.querySelector('.total-price'); 
      const totalValue = calculateTotal(cart);
      totalPriceElement.innerText = totalValue;
    }
  }
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image image-product';
  img.src = imageSource;
  return img;
};

const removeCartItem = (id) => {
  const itemsBeforRemove = getSavedCartItems('cartItems');
  if (itemsBeforRemove) {
    const removed = JSON.parse(itemsBeforRemove).filter((product) => product.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(removed));
    updateNumberCartItems();
    refreshTotal();
  }
};

const createCartItemImage = (thumbnail) => {
  const cartImage = document.createElement('div');
  cartImage.className = 'cart-image';
  const img = document.createElement('img');
  img.src = thumbnail;
  cartImage.appendChild(img);
  return cartImage;
};

const createCartItemDescription = (title, price) => {
  const itemDescription = document.createElement('div');
  itemDescription.className = 'item-description';
  const description = document.createElement('p');
  description.className = 'description';
  description.innerText = title;
  const priceCart = document.createElement('p');
  priceCart.className = 'cart-price';
  priceCart.innerText = price.toLocaleString(
    'pt-br',
    { style: 'currency', currency: 'BRL' },
  );
  itemDescription.appendChild(description);
  itemDescription.appendChild(priceCart);
  return itemDescription;
};

const createCartItemElement = ({ id, title, price, thumbnail }) => {
  const item = document.createElement('li');
  item.className = 'cart__item';
  const idElement = document.createElement('span');
  idElement.innerText = id;
  idElement.className = 'hiden';
  item.appendChild(idElement);
  item.appendChild(createCartItemImage(thumbnail));
  item.appendChild(createCartItemDescription(title, price));
  const removeButton = document.createElement('span');
  removeButton.className = 'material-symbols-outlined remove-button';
  removeButton.innerText = 'delete';
  item.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    removeCartItem(id);
    item.remove();
  });
  return item;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;  
  e.innerText = innerText;
  return e;
};

const createPriceDiv = (price) => {
  const priceDiv = document.createElement('div');
  priceDiv.className = 'price';
  const monetary = document.createElement('p');
  monetary.className = 'monetary';
  monetary.innerText = 'R$';
  const priceValue = price.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const value = document.createElement('p');
  value.className = 'value';
  value.innerText = priceValue;
  priceDiv.appendChild(monetary);
  priceDiv.appendChild(value);
  return priceDiv;
};

const createProductItemElement = ({ id, title, thumbnail, price }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('p', 'item_id hiden', id));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('p', 'item__title product-description', title));
  section.appendChild(createPriceDiv(price));
  section.appendChild(
    createCustomElement('button', 'item__add button add-cart-button', 'Adicionar ao carrinho!'),
  );
  return section;
};

const addCartItem = (item) => {
  const cartItemElement = createCartItemElement(item);
  cartItems.appendChild(cartItemElement);
};

const refreshCartItems = () => {
  if (Object.prototype.hasOwnProperty.call(localStorage, 'cartItems')) {
    const cart = JSON.parse(getSavedCartItems('cartItems'));
    cart.forEach((item) => addCartItem(item));
  }
};

const addCartItemButtonHandle = async (event) => {
  const currentID = event.target.parentNode.firstChild.innerText;
  const item = await fetchItem(currentID);
  addCartItem(item);
  const { id, title, price, thumbnail } = item;
  const carItems = {
    id,
    title,
    price,
    thumbnail,
  };
  let atualCart = JSON.parse(localStorage.getItem('cartItems'));
  if (!atualCart) {
    atualCart = [];
  }
  saveCartItems(carItems, atualCart);
  refreshTotal();
  updateNumberCartItems();
};

const getData = async (item) => {
  const data = await fetchProducts(item);
  data.map((product) => items.appendChild(createProductItemElement(product)));
};

window.onload = async () => {
  await getData('computador');
  const loaded = document.querySelector('.loading');
  items.removeChild(loaded);
  const totalPrice = document.createElement('p'); 
  totalPrice.className = 'total-price';
  totalContainer.appendChild(totalPrice);
  refreshTotal();
  refreshCartItems();
  const addButtons = document.querySelectorAll('.item__add');
  addButtons.forEach((button) => button.addEventListener('click', addCartItemButtonHandle));
  updateNumberCartItems();
};

emptyCart.addEventListener('click', () => {
  cartItems.innerText = '';
  clearStorage();
  const value = document.querySelector('.total-price'); 
  value.innerHTML = '';
  updateNumberCartItems();
});

const backTop = document.querySelector('.back-to-top');
function showButtonBackToTop() {
  if (window.scrollY > 400) {
    backTop.classList.add('show');
  } else {
    backTop.classList.remove('show');
  }
}

searchButton.addEventListener('click', async () => {
  items.innerText = '';
  await getData(inputSearch.value);
  const addButtons = document.querySelectorAll('.item__add');
  addButtons.forEach((button) => button.addEventListener('click', addCartItemButtonHandle));
});

const cartIcon = document.querySelector('.cart-icon');
const containerCart = document.querySelector('.container-cart');
const handleCloseCart = () => {
  containerCart.classList.toggle('close-header');
  containerCart.lastElementChild.classList.toggle('hiden');
  containerCart.firstElementChild.classList.toggle('close-cart-number');
  cartItems.parentElement.classList.toggle('close-cart-items');
  items.classList.toggle('close-items-conainer');
  items.parentElement.classList.toggle('close-items-conainer');
  containerCart.parentElement.firstElementChild.classList.toggle('close-header-title');
};

cartIcon.addEventListener('click', handleCloseCart);

window.addEventListener('scroll', function () {
  showButtonBackToTop();
});