
class Model {
  constructor(obj) {
    // return false;
    this.arr = obj.obj;
    this.stringify = JSON.stringify(obj).replace(/"/gi,'\\"');
    // console.log(this.arr);
    this.key = Object.keys(this.arr);
    this.numeral = Object.values(this.arr);
    this.size = obj.size;
    this.id = obj.id;//id of current widget
  };

   pano_promt(label,iter,numeral){
      var child_node = [
        "<div class=\"col-12 align-self-start module-row\">",
        '<div class="input-group mb-3">',
        '<div class="input-group-prepend">',
        '<button numeral="'+this.numeral[0]+'" class="numeral_word'+this.id+' btn prime-button btn-outline-secondary dropdown-toggle '+label.toLowerCase()+'" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+label+'</button>',
        '<div class="dropdown-menu toggle-routine toggle_menu'+this.id+'">',
                      ];
      for (var i = 1; i < this.key.length; i++) {
        child_node.push('<a class="dropdown-item" numeral="'+this.numeral[i]+'" onclick="new Actions().buildAction(this,'+this.id+')" href="#">'+this.key[i]+'</a>');
      }
      // this.promt[this.promt.indexOf('CONT')] = child_node;
      child_node.push(
        '</div>',
        '</div>',
        '<input type="text" numeral="'+numeral+'" onkeyup="new Actions().convertion(this,'+this.id+')" class="numeral_numb'+iter+' form-control" aria-label="Text input with dropdown button">',
        '</div>',
        '</div>'
      );
      return child_node.join('');
  };
   pano_result(label,iter,numeral) {
    return [
      '<div class="col-12 align-self-center module-row">',
        '<label class="numeral_word'+this.id+'" >'+label+'</label>',
        '<div class="input-group mb-3">',
          '<input id="clipboard'+iter+'" numeral="'+numeral+'" class="numeral_numb'+this.id+' form-control" typess="form-control" placeholder="" aria-label="" aria-describedby="button-addon'+iter+'">',
          '<div class="input-group-append">',
            '<button class="btn btn-outline-secondary" type="button" id="button-addon'+iter+'" data-clipboard-target="#clipboard'+iter+'">',
              '<i class="fas fa-copy"></i>',
            '</button>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');
  };
 closure(state){
   switch (state) {
     case 'start':
       return '<div class="widget'+this.id+' col-'+this.size+'">';
       break;
     case 'end':
       return '</div>';
       break;
   }
 }
};
