
 function pano_promt(content_arr) {
    var child_node = ['<button class="box1 btn prime-button btn-outline-secondary dropdown-toggle '+content_arr[0].toLowerCase()+'" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+content_arr[0]+'</button>',
                      '<div class="dropdown-menu toggle-routine">'].join('');
    for (var i = 1; i < content_arr.length; i++) {
      child_node += '<a class="dropdown-item" href="#">'+content_arr[i]+'</a>';
    }
    pano_promt[pano_promt.indexOf('CONT')] = child_node;
    // return jQuery.parseHTML(pano_promt.join(''));
    return pano_promt.join('');
}
function pano_result(label,iter) {
  return [
    '<div class="col-12 align-self-center module-row">',
      '<label class="box1>'+label+'</label>',
      '<div class="input-group mb-3">',
        '<input id="clipboard'+iter+'" typess="form-control" placeholder="" aria-label="" aria-describedby="button-addon'+iter+">',
        '<div class="input-group-append">',
          '<button class="btn btn-outline-secondary" type="button" id="button-addon'+iter+'" data-clipboard-target="#clipboard'+iter+'">',
            '<i class="fas fa-copy"></i>',
          '</button>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');
}




var pano_promt = [
  "<div class=\"col-12 align-self-start module-row\">",
    '<div class="input-group mb-3">',
      '<div class="input-group-prepend">',
        // '<button class="box1 btn prime-button btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Decimal</button>',
        // '<div class="dropdown-menu toggle-routine">',
          'CONT',
        '</div>',
      '</div>',
      '<input type="text" class="form-control" aria-label="Text input with dropdown button">',
    '</div>',
  '</div>'
];
var pano_result = [
  '<div class="col-12 align-self-center module-row">',
    '<label class="box1">',
    'LABEL',
    '</label>',
    '<div class="input-group mb-3">',
      '<input id="clipboard1" typess="form-control" placeholder="" aria-label="" aria-describedby="button-addon2">',
      '<div class="input-group-append">',
        '<button class="btn btn-outline-secondary" type="button" id="button-addon2" data-clipboard-target="#clipboard1">',
          '<i class="fas fa-copy"></i>',
        '</button>',
      '</div>',
    '</div>',
  '</div>'
];



function period(str) {
  var c = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ',') {
      c++;
    }
  }
  return c;
}
