(()=>{
  type UserId = string | number | boolean;

  let userId: UserId;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize : Sizes ;

  function greeting (userId: UserId, size: Sizes){
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`)
    }
  }
  greeting(11111, 'L');
})();
