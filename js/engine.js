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
var decToHex = function(digit) {
   var hex = (parseInt(digit)).toString(16);
    return hex;
  }
