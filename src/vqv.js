function vqv(name, age) {
  if (!name || !age) return undefined;

  if (typeof name !== 'string' || typeof age !== 'number') {
    return undefined;
  }

  return (
    `Oi, meu nome é ${name}!\n`
    + `Tenho ${age} anos,\n`
    + 'trabalho na Trybe e mando muito em programação!\n'
    + '#VQV!'
  );
}

module.exports = vqv;
