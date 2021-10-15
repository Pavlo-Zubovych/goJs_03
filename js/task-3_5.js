const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  console.table(products);

  const getAllPropValues = function (arr, prop) {
    // твій код
    const allValues = [];

    console.log(prop);

    for(const object of arr) {

        if (object[prop] !== undefined) {
        allValues.push(object[prop])
        }
    }
    return allValues

  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []
  