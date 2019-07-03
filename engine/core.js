var core = {
  input_collection:function(widget) {
    var node = $(widget).find('input'),
        tmp = [];
    node.each(function(e,i,a){
      tmp.push(node[e]);
      })
    return tmp;
  }
}

document.core = core;

Array.prototype.rotate = function (first) {
  console.log(first);
  this.splice(this.indexOf(first),1);
  this.unshift(first);
  console.log(this);
  return this;
}
Array.prototype.findMatch = function (array) {
  for(var i = 0; i < this.length; i++) {
    for (var y = 0; y < array.length; y++) {
      if (this[i] === array[y]) {
        return true;
      }
    }
  }
};
String.prototype.upCase = function () {
  var tmp = '';
  tmp = this.charAt(0).toUpperCase() + this.slice(1);
  return tmp.replace('_',' ');
}
var global_container = {};
(function () {
  // console.log(cookies.get('bit2bit'));
  if (cookies.get('bit2bit') !== undefined) {
    global_container = JSON.parse(cookies.get('bit2bit'));
 }else {
    global_container = {};
 }
 console.log(global_container);
}())


// console.log(global_container);
