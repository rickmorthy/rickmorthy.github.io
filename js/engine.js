

$('button.dec-to-bin-dec').on('click',function() {
  var value = $('.dec-to-bin-dec').val();
  // console.log(value);
  // var t = decToBin(value);
  var t = decToHex(value);
  $('.dec-to-bin .bin').val(t);
});





var decToBin = function(digit){
  var add = 1,
      bin,
      van = [],
      limit;
      digit>256 ? limit = 2048 : limit = 128;
  while(add<=limit){
    bin = (digit & add);
    bin ? van.unshift('1'):van.unshift('0');
    add += add;
  }
    return van.join('');
}
hexArray = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var decToHex = function(digit) {
   // var newArr = parseInt(digit,16);
   var newArr = (parseInt(digit)).toString(16);
  // console.log('hey');
  // var whole,
  //     reminder;
  // // while (digit>=0) {
  //   whole = digit/16;
  //   reminder = digit%16;
  // // }
  // var newArr = whole.map(function(elem){
  //   return whole.indexOf(hexArray);
  //
  // });
  console.log(newArr);
}
