const circle = (radius) => {
  const PI = 3.14;

  if (!radius || typeof radius !== 'number') return undefined;

  const area = (PI * radius * radius).toFixed(2);
  const circumference = (2 * PI * radius).toFixed(2);

  return {
    radius,
    area: parseFloat(area),
    circumference: parseFloat(circumference),
  };
};
module.exports = circle;
