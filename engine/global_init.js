
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



var global_container = {};

(function () {
  if (cookies.get('bit2bit') !== undefined) {
    global_container = JSON.parse(cookies.get('bit2bit'));
 }else {
    global_container = {};
 }
}())



// console.log(global_container);
