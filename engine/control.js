class Control {
  constructor(obj) {
    if (obj) {
      this.object = obj.obj;
      var global_arr = this.object; //for maping(construct object not in scope for map func)
      this.key = Object.keys(this.object); //Numeral system in word ex. Decimal
      this.values = Object.values(this.object); //Numeral system in number ex. 16

      this.size = obj.size;
      this.id = obj.id;
      this.length = Object.keys(this.key).length;
    }

    this.model = new Model(obj);
    // console.log(global_container[widget1]);
    // global_container['widget'+this.id] = {
    //   values:{}
    // }
  }
  widget(arr, size, number) {
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
  set global_obj(object) {
    var length = Object.keys(global_container).length;
    Object.defineProperty(global_container, 'widget' + object.id, {
      value: object
    });
    // console.dir(length);
    // global_container.log.push = object;
  }
  history_widget(){
    if (window.navigator.cookieEnabled === true) {
      var cookie_history_arr = JSON.parse(cookies.get('bit2bit')).history;
      // console.log(cookie_history_arr);
      return jQuery.parseHTML(this.model.menu(cookie_history_arr));
    }
  }

}
