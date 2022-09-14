require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', () =>{
    expect(typeof fetchItem).toBe('function')
  })
  it('Testa se fetch está no endPoint correto', async ()=>{
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })
  it('testa se fetchItem está retornando o item correto', async ()=>{
    const result = await fetchItem('MLB1615760527'); 
    expect(result).toEqual(item)
  })
  it('testa se ao chavar fetchItem sem agumento retorna um erro', async ()=>{
    expect(fetchItem()).rejects.toThrowError('You must provide an url')
  })
});
