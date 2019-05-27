var assetBundle = [
  'js/popper.min.js',
  'js/bootstrap.min.js',
  'js/clipboard.js-master/dist/clipboard.min.js',
  // 'builder/init.js',
  'js/engine.js',
  // 'js/builder.js',
  'js/constructor.js',
  'js/model.js',
  'js/main.js'
];
var snippets = 'first string',
snippetsArray;

for (var i = 0; i < assetBundle.length; i++) {
  // console.log(assetBundle[i]);
  $.getScript(assetBundle[i],function(data, textStatus, jqxhr) {
    // console.log(assetBundle[i]+' script was loaded');
  })
}
$.get('blocks/window.html',function(data, textStatus, jqXHR) {
  // if(data !== 'undefined'){

  // }
}).done(function(data){
  // console.log(data);
  // snippets = data;
});
// $.ajax({
//         url: 'blocks/window.html',
//         type: 'get',
//         dataType: 'html',
//         async: true,
//         success: function(data) {
//             snippets = data;
//         }
//      });

// console.log(snippets);
