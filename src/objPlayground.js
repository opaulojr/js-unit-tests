function calculator(a, b) {
  return {
    sum: a + b,
    mult: a * b,
    div: Math.floor(a / b),
    sub: a - b,
  };
}

function arrayGenerator(type, obj) {
  if (type === 'keys') {
    return Object.keys(obj);
  } if (type === 'values') {
    return Object.values(obj);
  } if (type === 'entries') {
    return Object.entries(obj);
  }
  return [];
}

module.exports = { calculator, arrayGenerator };
