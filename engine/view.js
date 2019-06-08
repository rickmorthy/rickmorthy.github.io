// var arr = ['Decimal','Binary','Hexadecimal','Other'];
var global_container = {};
var obj = {'Decimal':10,'Binary':2,'Hexadecimal':16,'Octal':8};
console.log(global_container);

// var main_widget = new Control(obj,'6',1);
// $('.main-frame').prepend(main_widget.widget());
// var main_widget = ;
$('.main-frame').prepend(new Control({
obj:obj,
size:'12',
id:1,
}).widget());


// function addBit(bin) {
//   var bit = bin;
//   for (var i = bit.length-1; i >= 0; i--) {
//         if(parseInt(bit[i]) + 1 > 1){
//         bit[i] = '0';
//       }else {
//         bit[i] = '1';
//         return bit;
//       }
//   }
// }
// var decToBin = function(digit){
//   var add = 1,
//       bin,
//       van = [],
//       limit;
//       digit>=256 ? limit = 2048 : limit = 128;
//   while(add<=limit){
//     bin = (digit & add);
//     bin ? van.unshift('0'):van.unshift('1');
//     add += add;
//   }
//     return addBit(van).join('');
// }
// console.log(decToBin(256));

function binToDec(number) {
  var digit = number.toString(),
      accume = 1,
      add = 1;
  for (var i = digit.length-1; i >= 0; i--) {
    if (digit[i] === '0') {
      accume += add;
    }
    add += add;
  }
  return accume;
}
console.log(binToDec(10001100));
