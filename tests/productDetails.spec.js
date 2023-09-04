const productDetails = require('../src/productDetails');

describe('6 - `productDetails` Testes', () => {
  it('Verifica se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails('Xbox', 'PlayStation'))).toBe(true);
  });

  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    expect((productDetails('Nintendo', 'PC')).length).toBe(2);
  });

  it('Verifica se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof (productDetails('Xbox', 'PlayStation')[0]) === 'object').toBe(true);
    expect(typeof (productDetails('Nintendo', 'PC')[1]) === 'object').toBe(true);
  });

  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Xbox', 'PlayStation')[0]).not.toEqual(productDetails('Nintendo', 'PC')[1]);
  });

  it('Verifica se os dois productIds terminam com 123', () => {
    const result = productDetails('PlayStation', 'Nintendo');
    expect(result[0].details.productId.endsWith('123')).toBe(true);
    expect(result[1].details.productId.endsWith('123')).toBe(true);
  });
});
