class Control {
  constructor(obj) {
    if (obj) {
      this.object = obj.obj;
      // var global_arr = this.object; //for maping(construct object not in scope for map func)
      this.key = Object.keys(this.object); //Numeral system in word ex. Decimal
      this.values = Object.values(this.object); //Numeral system in number ex. 16

      this.size = obj.size;
      this.id = obj.id;
      this.title = obj.title;
      this.length = Object.keys(this.key).length;
      this.collection_of_attr;
    }
    this.model = new Model(obj);
  }
  widget(arr, size, number) {
    var widget,
      node;
    widget = this.model.closure('start');
    // console.log(this.values);
    widget += this.model.pano_promt(this.key[0], this.id, this.values[0]);
    for (var i = 1; i < this.length; i++) {
      widget += this.model.pano_result(this.key[i], i, this.values[i]);
    }
    widget += this.model.closure('end');
    widget = jQuery.parseHTML(widget);
    this.widget_action(widget);
    return widget;
  };

  history_widget() {
    var widget,
        size = '12',
        hidden = 'hidden';
    if (window.navigator.cookieEnabled === true) {
      if(global_container.hasOwnProperty('history') && Object.keys(global_container.history).length > 0){
        var cookie_history_arr = global_container.history;
        widget = this.model.history_container(this.model.history(cookie_history_arr),size);
        widget = jQuery.parseHTML(widget);
      } else {
        widget = '';
      }
      this.history_action();
      return widget;
    }
  }
  settings_widget(){
    var widget = [],
        fields = {
          "history":"",
          "dont_remember_results":""
        };
    if (!global_container.hasOwnProperty('settings') || Object.keys(global_container.settings).length === 0) {
      global_container.settings = fields;
    }
    for (var elem in global_container.settings) {
      if (global_container.settings.hasOwnProperty(elem)) {
        widget.push(...this.model.settings(elem,global_container.settings[elem]));
      }
    }
    // $('#settings').on('click',function() {
    //   // $('.sm-history').toggleClass('hidden');
    // widget = jQuery.parseHTML(widget.join(''));
    // })
    widget = jQuery.parseHTML(widget.join(''));
    this.settings_action(widget);
    return widget;
  }

/////////////////////////////
//  actions attache handlers to the events
////////////////////////////
  widget_action(widget) {
    var node = $(widget).find('input:first'),
      action = new Actions(node[0], this.id),
      cookie = new Cookies(document.core.input_collection(widget), action.collection_of_words),
      method = this.id,
      that = this;
    $(node[0]).on('keyup', function() {
      action.validate();
      action[method]();
      cookie.cookies_value(that.id, action.collection_of_all);
    })
  }

  settings_action(widget){
    var node = $(widget).find('input');
    $(node).click(function() {
      // console.dir(global_container.settings);
      if (global_container.hasOwnProperty('settings')) {
        global_container.settings[this.attributes.id.value] = this.checked;
      }else{
        global_container.settings[this.attributes.id.value] = this.checked;
        global_container.settings = {};
      }
      // console.log(global_container.settings[this.attributes.id.value]);
      cookies.set('bit2bit',JSON.stringify(global_container));
    })
  }

  history_action(){
    $('#history').on('click',function() {
      $('.hidden').toggleClass('hidden');
    })
  }
}
