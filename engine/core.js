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
