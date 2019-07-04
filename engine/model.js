class Model {
  constructor(obj) {
    // return false;
    if (obj) {
      this.arr = obj.obj;
      this.stringify = JSON.stringify(obj).replace(/"/gi, '\\"');
      // console.log(this.arr);
      this.key = Object.keys(this.arr);
      this.numeral = Object.values(this.arr);
      this.size = obj.size;
      this.id = obj.id; //id of current widget
      this.method = ` '${this.id}'`;
    }

  };

  pano_promt(label, iter, numeral) {
    var child_node = [
      "<div class=\"col-12 align-self-start module-row\">",
      '<div class="input-group mb-3">',
      '<div class="input-group-prepend">',
      '<button numeral="' + this.numeral[0] + '" class="numeral_word' + this.id + ' dropdown' + this.id + ' btn prime-button btn-outline-secondary dropdown-toggle ' + label.toLowerCase() + '" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + label + '</button>',
      '<div class="dropdown-menu toggle-routine toggle_menu' + this.id + '">',
    ];
    for (var i = 1; i < this.key.length; i++) {
      child_node.push('<a class="dropdown-item dropdown' + this.id + '" numeral="' + this.numeral[i] + '" onclick="new Actions(this,' + this.method + ').buildAction()" href="#">' + this.key[i] + '</a>');
    }
    // this.promt[this.promt.indexOf('CONT')] = child_node;
    child_node.push(
      '</div>',
      '</div>',
      '<input type="text" numeral="' + numeral + '"  class="numeral_numb' + iter + ' form-control" id="input' + this.id + '" aria-label="Text input with dropdown button">',
      // '<input type="text" numeral="' + numeral + '" onkeyup="new Actions(this,' + this.method + ').validate(this).' + this.id + '()" class="numeral_numb' + iter + ' form-control" id="input' + this.id + '" aria-label="Text input with dropdown button">',
      '</div>',
      '</div>'
    );
    // console.log(child_node.join(''));
    return child_node.join('');
  };
  pano_result(label, iter, numeral) {
    return [
      '<div class="col-12 align-self-center module-row">',
      '<label class="numeral_word' + this.id + '" >' + label + '</label>',
      '<div class="input-group mb-3">',
      '<input id="clipboard' + iter + '" numeral="' + numeral + '" readonly class="numeral_numb' + this.id + ' form-control" typess="form-control" placeholder="" aria-label="" aria-describedby="button-addon' + iter + '">',
      '<div class="input-group-append">',
      '<button class="btn btn-outline-secondary" type="button" id="button-addon' + iter + '" data-clipboard-target="#clipboard' + iter + '">',
      '<i class="fas fa-copy"></i>',
      '</button>',
      '</div>',
      '</div>',
      '</div>'
    ].join('');
  };
  closure(state) {
    switch (state) {
      case 'start':
        return '<div class="widget' + this.id + ' col-' + this.size + '">';
        break;
      case 'end':
        return '</div>';
        break;
    }
  }

  history(param_arr) {
    // var cookie = JSON.parse(cookies.get('bit2bit'));
    var history_menu = [];
    for (var i = 0; i < param_arr.length; i++) {
      history_menu.push(
        '<table class="table table-light .table-hover">',
        '<thead>',
        '<tr>'
      );
      // console.log(param_arr[i]);
      param_arr[i][0].map(function(e, i, a) {
        history_menu.push('<th scope="col">' + e + '</th>');
      })
      history_menu.push(
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>'
      );
      param_arr[i][1].map(function(e, i, a) {
        history_menu.push('<td>' + e + '</td>');
      })
      history_menu.push(
        '</tr>',
        '</tbody>',
        '</table>'
      )
    }
    // console.log(history_menu);
    // console.log(history_menu.join(''));
    return history_menu.join('');

  }
  settings(label,status) {
    var checked = status === true ? 'checked' : '',
        strip_label = label.upCase();
    var html = [
      '<div class="form-check">',
      '<input class="form-check-input" type="checkbox"  notid="'+label+'" '+checked+'>',
      '<label class="form-check-label" for="check'+label+'">',
      strip_label,
      '</label>',
      '</div>'
    ]
    return html;
  }
  // footer(){
  //   return [
  //     '<footer class="footer">',
  //       '<div class="container-fluid ">',
  //         'github.com/rickmorthy',
  //         '<i class="far fa-copyright"></i>',
  //       '</div>',
  //     '</footer>'
  //   ].join('');
  // }
};
