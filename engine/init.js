;(function () {
  var assetBundle = [
    'js/cookies.js',
    'js/popper.min.js',
    'js/bootstrap.min.js',
    'js/clipboard.js-master/dist/clipboard.min.js',
    'engine/core.js',
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
