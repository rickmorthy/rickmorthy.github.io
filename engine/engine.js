class Manipulation {

    addBit(bin) {
    //expand to 8 or 16 bits
    var bit = bin;
    for (var i = bit.length-1; i >= 0; i--) {
          if(parseInt(bit[i]) + 1 > 1){
          bit[i] = '0';
        }else {
          bit[i] = '1';
          return bit;
        }
    }
  };
  remBit(bin){
    var bit = bin.toString().split('');
    // console.log(bit);
    for (var i = bit.length-1; i >= 0; i--) {
          if(parseInt(bit[i]) + 1 === 1){
            // console.log(bit);
          bit[i] = '1';
        }else {
          bit[i] = '0';
          return bit.join('');
        }
    }
  }
 d2b(digit){
   // console.log(5 & 4);
    var add = 1,
        bin,
        van = [],
        limit;
        digit>=256 ? limit = 2048 : limit = 128;
    while(add<=limit){
      bin = (digit & add);
      // cons ole.log(bin);
      bin  ? van.unshift('0'):van.unshift('1');
      add += add;
    }
    // console.log(van);
      return this.addBit(van).join('');
  }

   b2d(number) {
    var digit = number.toString(),
        accume = 1,
        add = 1;
    for (var i = digit.length-1; i >= 0; i--) {
      if (digit[i] === '0') {
        accume += add;
      }
      add += add;
    }
    return '-'+accume.toString();
  }
// }
d2h(number){
  var dec = (16 + (-number[0])).toString(16);
  // console.log(dec);
  if (number.length > 1) {
    for (var i = 1; i < number.length;i++) {
      dec += (16 + (-number[i])).toString(16);
    }
  }
  return dec;
}
h2d(number){
  var dec = 16 - parseInt(number[0], 16);
  if (number.length > 1) {
    for (var elem in number) {
      dec += 15 - parseInt(number[elem],16);
    }
  }
  return dec;
}
b2h(number){
  var digit = this.remBit(number).split(''),
      tmp ;
  if(number.length % 4 === 0){

    tmp.map(function(item) {
      if (item === '') {

      }
    })
  }

}
}

  // console.log(binToDec(10001100));
