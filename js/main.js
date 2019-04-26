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
    switch (val) {
      case 'Decimal':
        setLabel('Binary','Hexadecimal',val);
        break;
      case 'Binary':
        setLabel('Decimal','Hexadecimal',val);
        break;
      case 'Hexadecimal':
        setLabel('Binary','Decimal',val);
        break;
    }
  $('.prime-button').html();
});
function setLabel(x,y,z){
  $('.prime-button').html(z);
  $('.first-box').html(x);
  $('.second-box').html(y);
}
