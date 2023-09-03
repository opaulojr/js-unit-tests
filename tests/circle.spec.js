const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se circle retorna undefined, caso o parâmetro passado não seja um número', () => {
  });

  it('Verifica se circle retorna um objeto', () => {
    expect(typeof circle(5)).toEqual('object');
  });

  it('Verifica se o objeto retornado possui 3 propriedades', () => {
    expect(Object.keys(circle(6)).length).toEqual(3);
  });

  it('Verifica se dentro do objeto retornado, existe `key` com `value` igual à circunferência correta para um círculo de raio 2', () => {
    expect(circle(2)).toHaveProperty('circumference', 12.56);
  });

  it('Verifica se dentro do objeto retornado, existe `key` com `value` igual à área correta para um círculo de raio 3', () => {
    expect(circle(3)).toHaveProperty('area', 28.26);
  });

  it('Verifica se a função retorna, em um objeto, os dados corretos de um círculo de raio 3', () => {
    expect(circle(3)).toMatchObject({
      radius: 3,
      area: 28.26,
      circumference: 18.84,
    });
  });

  it('Verifica se a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(circle()).toBeUndefined();
  });
});
