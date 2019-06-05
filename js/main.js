
$('.dropdown-item').on('click',function(){
  var button = $(this).html(),
      numeral_target = $(this).attr('numeral');
      // target = $('.numeral_word1'),
      numeral_word = [],
      numeral_numb = [];//get new toggle button value
  $('.numeral_word1').each(function(){ numeral_word.push($(this).text());})
  $('.numeral_numb1').map(function (item) { numeral_numb.push($(this).attr('numeral'));})
  numeral_word.rotate(button);
  numeral_numb.rotate(numeral_target);
  $('.numeral_word1').each(function(index) {//assign each label a new state
    $(this).text(numeral_word[index]);
    $(this).attr('numeral',numeral_numb[i]);
  })
  // console.log(numeral_word);

});
$.fn.rotate = function (array) {
  $(this).each(function (index) {

  })
}
Array.prototype.rotate = function (first) {
  console.log(first);
  this.splice(this.indexOf(first),1);
  return this.unshift(first);
}

// function setLables(target){//Changes inputs position
  // var one = 1;
  // console.log( target);
  // Object.keys(target).forEach(function(val,index) {
  //   $(target[index]).text(val);
  // })
  // target.each(function(index){
    // console.log(index);
    // console.log(target[index]);
    // $(this).text(main_widget.key[index]);
    // one++;
  // });
  // console.log(main_widget.key);

// }
function setToggleMenu(target){
  // var toggleElem = $('.widget1 .dropdown-item');
  target.each(function(index) {
    // console.log($(target[index]).text());
    $(target[index+1]).text(main_widget.key[index+1]);
  })
  // console.log(toggleElem);

  // TODO: Finish class, get set of toggle elements and then set them values of shifted array of labels
}
