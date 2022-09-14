const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
localStorageSimulator('setItem');

const cartItem = {
  id: 'MLB1607748387',
  price: 1372.49,
  title: 'Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram',
};

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado;', () => {
    saveCartItems(cartItem, []);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems(cartItem, []);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '[{\"id\":\"MLB1607748387\",\"price\":1372.49,\"title\":\"Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram\"}]');
  });

});
