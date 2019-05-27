function Wind(x){
  this.x = x;
}
Wind.prototype.test = function (arguments) {
  // console.log('This wokrs');
  // $('body').load('blocks/window.html');
  var t;


  // console.log(t);
  $('body').append(t);
};

var f = new Wind();
f.test();
