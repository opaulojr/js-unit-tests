function createMenu(menu) {
  const consumption = [];

  function fetchMenu() {
    return menu;
  }

  function order(item) {
    if (menu.food[item] || menu.drink[item]) {
      consumption.push(item);
    }

    return 'Item indisponível';
  }

  function pay() {
    const total = consumption.reduce((acc, item) => acc + (menu.food[item] || menu.drink[item]), 0);
    const totalWithTaxes = total * 1.1;
    return Number(totalWithTaxes.toFixed(2));
  }

  return {
    fetchMenu,
    order,
    pay,
    consumption,
  };
}

module.exports = createMenu;
