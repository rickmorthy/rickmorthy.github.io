//new ClipboardJS('.btn');
// console.log(Array.prototype);
$('.dropdown-item').on('click',function(){
  var val = $(this).html();
  initLabel(val);
  $('.toggle-routine').empty();

  $('.prime-button').html();
});

function initLabel(x){
  var arr = ['Decimal','Binary','Hexadecimal'];
  arr.splice(arr.indexOf(x),1);
  arr.unshift(x);
  setLables(arr);
  // return arr;
}
function setLables(arr){
  var labels = $('.box1');
  // var labels = Array.prototype.slice.call($('.box1'));
  console.log(labels);
  var one = -1;
  $('.box1').each(function(){
    one++;
    console.log(arr[one]);
    $(this).text(arr[one]);
  })
}
function setToggleMenu(arr){
  var toggleElem = [];
  arr.forEach(function(elem){
    toggleElem.push()
    //// TODO: array of elements, starting from second save as HTML into Array
  })
}
