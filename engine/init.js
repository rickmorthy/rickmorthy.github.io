;(function () {
  var assetBundle = [
    'engine/core.js',
    'js/cookies.js',
    'js/popper.min.js',
    'js/bootstrap.min.js',
    'js/clipboard.js-master/dist/clipboard.min.js',
    'engine/valid.js',
    'engine/cookies.js',
    'engine/engine.js',
    'engine/actions.js',
    'engine/model.js',
    'engine/control.js',
    'engine/view.js',
  ];
  for (var i = 0; i < assetBundle.length; i++) {
    $.getScript(assetBundle[i],function(data, textStatus, jqxhr) {
    })
  }
}());
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
