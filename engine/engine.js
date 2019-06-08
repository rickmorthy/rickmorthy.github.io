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
 decToBin(digit){
   console.log(digit);
    var add = 1,
        bin,
        van = [],
        limit;
        digit>=256 ? limit = 2048 : limit = 128;
    while(add<=limit){
      bin = (digit & add);
      bin ? van.unshift('0'):van.unshift('1');
      add += add;
    }
    // console.log(van);
      return this.addBit(van).join('');
  }

   binToDec(number) {
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
decToHex(number){

  return '16';
}
hexToDec(number){
  //FFFE
  var hex = {'a':10,'b':11,'c':12,'d':13,'e':14,'f':15},
      final = [],
      tmp;
   for (var elem in number) {
     console.log(number[elem]);
     if (/[a-zA-Z]/.test(number[elem])) {
       final.push(hex[number]);
     }else if (/[0-9]/gm.test(number[elem])) {
       final.push(parseInt(number ));
     }
   }
   final.sum();
   console.log(final);
  return final;
}
}
Array.prototype.sum = function () {
  var tmp = 0;
  this.forEach((item) => {
    console.log(typeof item);
    tmp += item;
  })
  return tmp;
};
  // console.log(binToDec(10001100));
