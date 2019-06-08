class Control{
  constructor(obj) {
    //this.key IS A MAIN PROPERTY EVERY OTHER METHODS DEPEND OF
    this.global_obj = obj;
    var widget1 = 'widget1';
    // console.log(global_container[widget1]);
    this.object = obj.obj;
    var global_arr = this.object;//for maping(construct object not in scope for map func)
    this.key = Object.keys(this.object);//Numeral system in word ex. Decimal
    this.values = Object.values(this.object);//Numeral system in number ex. 16
    // console.log(this.values);
    this.true_arr = Object.keys(this.object).map(function(key,index,arr) {//asoc array
      return [key,Object.values(global_arr)[index]];
    })
    this.size = obj.size;
    this.id = obj.id;
    this.length = Object.keys(this.key).length;
    this.model = new Model(obj);
    }
    widget(arr,size,number){
      var widget;
      widget = this.model.closure('start');
      // console.log(this.values);
      widget += this.model.pano_promt(this.key[0], this.id, this.values[0]);
      for (var i = 1; i < this.length; i++) {
        widget += this.model.pano_result(this.key[i], i, this.values[i]);
      }
      widget += this.model.closure('end');
      return jQuery.parseHTML(widget);
    };
    set global_obj(object){
      var length = Object.keys(global_container).length;
      Object.defineProperty(global_container,'widget'+object.id,{value:object});
      // console.dir(length);
      // global_container.log.push = object;
    }
  }
