(()=>{
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "ljokñljiods lojfioejf";
  console.log('productDescription', productDescription);

  let productPrice = 123;
  let isNew = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
    `;
  console.log(summary)
})()
