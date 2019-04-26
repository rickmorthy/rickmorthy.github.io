// $('.dec-to-bin-dec').on('click',function() {
  // var text = $('.dec-to-bin .bin').val();
  // console.log(10 | 15);
  // $('.dec-to-bin .bin').val('Random text');
  // console.log(text);
  // try{
  //    clipboard(text);
  //   // if(document.execCommand('copy',text)){
  //     // console.log('It works');
  //   // }
  // } catch(err){
  //   console.log(err);
  // }

// })
new ClipboardJS('.btn');

$('.dropdown-item').on('click',function(){
  var val = $(this).html();
  initLabel(val);
    // switch (val) {
    //   case 'Decimal':
    //     swapBox('Binary','Hexadecimal',val);
    //     break;
    //   case 'Binary':
    //     swapBox('Decimal','Hexadecimal',val);
    //     break;
    //   case 'Hexadecimal':
    //     swapBox('Binary','Decimal',val);
    //     break;
    // }
  $('.prime-button').html();
});
function swapBox(x,y,z){
  $('.prime-button').html(z);
  $('.first-box').html(x);
  $('.second-box').html(y);
}
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
  var one = 0;
  $('.box1').each(function(){
    one++;
    console.log(arr[one]);
    $(this).text(arr[one]);
    // console.log(this);
  })
  // for(var elem in labels){
    // console.log(elem.innerHTML);
  // }
  // labels.forEach(function(elem){
    // console.log(elem.html());
    // one++;
    // labels[one].html(elem);
    // console.log(elem);
  // })
}
