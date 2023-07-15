(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title:string,
    createdAt: Date,
    stock: number,
    size: Sizes
    ) {
      return {
        title,
        createdAt,
        stock,
        size
      }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);

  const createProductToJson2= (
    title:string,
    createdAt: Date,
    stock: number,
    size?: Sizes
    ) => {
      return {
        title,
        createdAt,
        stock,
        size
      }
  }
  const producto2 = createProductToJson2('P2', new Date(), 12);
  console.log(producto2);
})();
