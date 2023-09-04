const createMenu = require('../src/restaurant');

describe('10 - `createMenu` Testes', () => {
  it('Verifica se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função', () => {
    const menu = createMenu({
      food: {},
      drink: {},
    });

    expect(menu).toHaveProperty('fetchMenu');
    expect(typeof menu.fetchMenu).toBe('function');
  });

  it('Verifica se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`', () => {
    const menu = createMenu({
      food: {},
      drink: {},
    });

    const menuKeys = Object.keys(menu.fetchMenu());

    expect(menuKeys).toHaveLength(2);
    expect(menuKeys).toEqual(expect.arrayContaining(['food', 'drink']));
  });

  it('Verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função "objetoRetornado.fetchMenu()"', () => {
    const menuData = {
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    };
    const menu = createMenu(menuData);

    expect(menu.fetchMenu()).toEqual(menuData);
  });

  it('Verifica se `objetoRetornado.consumption`, após a criação do menu, retorna um array vazio', () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });

    expect(menu.consumption).toEqual([]);
  });

  it('Verifica se ao chamar a função `order`, passando um produto existente, o produto é adicionado ao array consumption', () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });

    menu.order('coxinha');

    expect(menu.consumption).toEqual(['coxinha']);
  });

  it('Verifica se ao chamar a função `order`, passando um produto inexistente, retorna "Item indisponível" e não adiciona nada ao array', () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });

    const result = menu.order('pizza');

    expect(result).toBe('Item indisponível');
    expect(menu.consumption).toEqual([]);
  });

  it('Verifica se, ao adicionar três pedidos em sequência, o array `objetoRetornado.consumption` contém os itens pedidos', () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });

    menu.order('coxinha');
    menu.order('cerveja');
    menu.order('agua');

    expect(menu.consumption).toEqual(['coxinha', 'cerveja', 'agua']);
  });

  it('Verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`', () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });

    menu.order('coxinha');
    menu.order('coxinha');
    menu.order('coxinha');

    expect(menu.consumption).toEqual(['coxinha', 'coxinha', 'coxinha']);
  });

  it('Verifica se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%', () => {
    const menu = createMenu({
      food: { coxinha: 3.9, sopa: 9.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    });

    menu.order('coxinha');
    menu.order('cerveja');
    menu.order('agua');

    const total = menu.pay();

    expect(total).toBe(16.17);
  });
});
