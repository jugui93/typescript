(()=>{
  const calcularTotal= (prices: number[]): string =>{
    let total = 0;
    prices.forEach(item => total += item );
    return total.toString();
  }

  const rta = calcularTotal([2,5,6,5,6,7]);
  console.log(rta);

  const printTotal = (prices: number[] ) => {
    const rta = calcularTotal(prices);
    console.log('El total es ' + rta)
  };

  printTotal([2,5,6,5,6,7]);
})();
