(()=>{
  const prices = [1,2,3,5,58,5,'hola', true];
  // prices.push('ajkhh');
  // prices.push(true);
  // prices.push({});
  prices.push(5645);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  const numbers = [1,2,3,5,58,5];

  numbers.map(item => item * 2);
})();
