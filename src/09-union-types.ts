(()=>{
  let userId: string | number;
  userId = 1212;
  userId = 'assasas';

  function greeting (myText: string | number){
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }
  greeting('JuanDev');
  greeting(12.15565);
})();
