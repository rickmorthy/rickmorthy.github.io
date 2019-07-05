Array.prototype.scriptLoader = function(async) {
  this.map(function(e, i, a) {
    var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = e;
        script.async = async || false;
    var scr = document.getElementsByTagName("script")[0];
        scr.parentNode.insertBefore(script, null);
    // console.dir(script.async);
  });
};
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
  var tmp = String('');
  tmp = this.charAt(0).toUpperCase() + this.slice(1);
  tmp = tmp.replace(/_/gi,' ');
  return tmp;
}
