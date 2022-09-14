require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se fetchProducts é uma função', () =>{
    expect(typeof fetchProducts).toBe('function')
  })
  it('testa se fetch está sendo chamada', async ()=>{
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })
  it('testa se fetch está sendo chamada', async ()=>{
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  it('testa se ao chavar fetchProducts sem agumento retorna um erro', async ()=>{
    expect(fetchProducts()).rejects.toThrowError('You must provide an url')
  })
});
