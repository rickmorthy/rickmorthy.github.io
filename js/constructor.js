function getHtml(x){
  return '../blocks/'+x+'.html';
}
function Wind(x){
  this.x = x;
}
Wind.prototype.test = function (arguments) {
  console.log('This wokrs');
  $('.container-fluid').load(getHtml('window'));

}

var f = new Wind();
f.test();
