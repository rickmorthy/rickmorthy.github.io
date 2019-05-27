// console.log(pano_promt_init());
var arr = ['Decimal','Binary','Hexadecimal','Other'];
// console.log(pano_promt_init(arr));
$('body').prepend(pano_promt(arr));
// var v = build.tag('div',{
//   'class':'btn class',
//   'pole':''
// },'This is a content');
// console.log(v);
// build.test()

$('.dropdown-item').on('click',function(){
  var val = $(this).html();
  initLabel(val);
  $('.toggle-routine').empty();

  $('.prime-button').html();
});

function initLabel(x){

  arr.splice(arr.indexOf(x),1);
  arr.unshift(x);
  setLables(arr);
  // return arr;
}
function setLables(arr){//Changes inputs position
  var labels = $('.box1');
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
