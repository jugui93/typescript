(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1';
  customerAge += 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);

  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('123');
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('Not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex)
  let bin = 0b101010;
  console.log('bin', bin)
})();
