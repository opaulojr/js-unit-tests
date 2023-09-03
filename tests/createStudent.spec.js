const createStudent = require('../src/createStudent');

const goodPerson = 'Eita pessoa boa!';

describe('5 - Implemente a função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
    const student = createStudent('Paulo, o Lobo Solitário');
    expect(typeof student).toBe('object');
    expect(typeof student.feedback).toBe('function');
    expect(student.name).toMatch(/Paulo, o Lobo Solitário/);
    expect(student.feedback()).toBe(goodPerson);

    const student2 = createStudent('Maria');
    expect(typeof student2).toBe('object');
    expect(typeof student2.feedback).toBe('function');
    expect(student2.name).toMatch(/Maria/);
    expect(student2.feedback()).toBe(goodPerson);

    const student3 = createStudent('Junior');
    expect(typeof student3).toBe('object');
    expect(typeof student3.feedback).toBe('function');
    expect(student3.name).toMatch(/Junior/);
    expect(student3.feedback()).toBe(goodPerson);
  });
});
