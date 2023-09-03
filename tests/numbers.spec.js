const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando recebe [1, 2, 3, 4, 5]', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  it('Verifica se a função `numbers` retorna `false` quando recebe [1, 2, "3", 4, 5]', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  });

  it('Verifica se a função `numbers` retorna `false` quando recebe [1, "a", 3]', () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  });

  it('Verifica se a função `numbers` retorna `false` quando recebe [" "]', () => {
    expect(numbers([''])).toBe(false);
  });

  it('Verifica se a função `numbers` retorna `undefined` quando não recebe nenhum parâmetro', () => {
    expect(numbers()).toBeUndefined();
  });
});
