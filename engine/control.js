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
    // this.add_cookie_action(widget);
    // console.log(node);
    // node[0].

    return widget;
  };
  // set global_obj(object) {
  //   var length = Object.keys(global_container).length;
  //   Object.defineProperty(global_container, 'widget' + object.id, {
  //     value: object
  //   });
  // }
  history_widget() {
    if (window.navigator.cookieEnabled === true) {
      if (cookies.get('bit2bit') !== undefined && JSON.parse(cookies.get('bit2bit')).hasOwnProperty('history')) {
        var cookie_history_arr = JSON.parse(cookies.get('bit2bit')).history;
        $('#history').on('click',function() {
          if (append_history === '.history') {
            $('#main').toggleClass('col-12').toggleClass('col-9',true);
          }
          $(append_history).toggleClass('hidden');
        })
        return jQuery.parseHTML(this.model.history(cookie_history_arr));
      } else {
        return '';
      }
    }
  }
  settings_widget(){
    var widget = [],
        fields = {
          "history":"",
          "remember_results":""
        },
        parsed_widget;
    if (!global_container.hasOwnProperty('settings') || Object.keys(global_container.settings).length === 0) {
      global_container.settings = fields;
    }
    for (var elem in global_container.settings) {
      if (global_container.settings.hasOwnProperty(elem)) {
        widget.push(...this.model.settings(elem,global_container.settings[elem]));
      }
    }
    $('#settings').on('click',function() {
      $('.sm-history').toggleClass('hidden');
    widget = jQuery.parseHTML(widget.join(''));
    })
    widget = jQuery.parseHTML(widget.join(''));
    this.settings_action(widget);
    // console.log(jQuery.parseHTML(widget.join('')));
    return widget;
  }


  widget_action(widget) {
    var node = $(widget).find('input:first'),
      action = new Actions(node[0], this.id),
      cookie = new Cookies(document.core.input_collection(widget), action.collection_of_words),
      method = this.id,
      that = this;
    $(node[0]).on('keyup', function() {
      console.log(validation_flag);
      action.validate();
      action[method]();
      cookie.cookies_value(that.id, action.collection_of_all);
    })
  }

  settings_action(widget){
    var node = $(widget).find('input');
    $(node[0]).on('click',function() {
      console.log(this.attributes.id.value,this.checked);
      global_container.settings[this.attributes.id.value] = this.checked;
      // console.log(global_container);
      cookies.set('bit2bit',JSON.stringify(global_container));
    })
  }

}
