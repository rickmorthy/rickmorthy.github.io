class Cookies {
  constructor(inputs, words) {
    this.input_collection = inputs;
    this.collection_of_labels = words;
    this.tmp_arr = [];
    this.prop_ignore = [ // ignore properties in global_container when restore data to inputs
      'history',
      'key_pressed'
    ]
  }
  fillUp(json) { // uploads result saved in cookies into widget
    // var cookie = JSON.parse();
    global_container = JSON.parse(cookies.get('bit2bit'));
    // console.log(json);
    for (var elem in global_container) {
      if (global_container.hasOwnProperty(elem) && Object.keys(global_container).findMatch(this.prop_ignore)) {
        var input = document.querySelectorAll('.widget' + elem + ' input'),
          label = document.querySelectorAll('.numeral_word' + elem),
          toggle = document.querySelectorAll('.dropdown' + elem);

        input.forEach(function(item, i) {
          global_container[elem].values.length === 0 ? true : item.value = global_container[elem].values[i];
          if (global_container[elem].hasOwnProperty('position')) {
            item.attributes.numeral.value = global_container[elem].position[1][i]
            label[i].innerHTML = global_container[elem].position[0][i];
            toggle[i].innerHTML = global_container[elem].position[0][i];
            toggle[i].attributes.numeral.value = global_container[elem].position[1][i];
          }
        })
      }
    }
  }

  cookies_value(id, collection) { //this.id not within scope of this function
    if (!global_container.hasOwnProperty(id)) { //if widget container doesnt exist - create one.
      global_container[id] = {};
    }
    if (!global_container[id].hasOwnProperty('position')) {
      Object.defineProperty(global_container[id], 'position', {
        value: {},
        writable: true,
        enumerable: true
      });
    }
    global_container[id].position = [collection[0], collection[1]];
    this.input_collection.forEach(function(item, i) {
      this.tmp_arr.push(item.value);
    }, this);
    global_container[id].values = this.tmp_arr;
    console.log(global_container);
    cookies.set('bit2bit', JSON.stringify(global_container));

    var that = this;
    if (Date.now() - key_pressed >= cookies_history_save_interval) { //save result in history if 3 seconds passed from last pressed key
      that.set_history(collection[0], collection[2]);
      key_pressed = Date.now();
    } else {
      key_pressed = Date.now();
    }

  }

  set_history(numeral_word, numeral_numb) {
    var tmp = [];
    global_container = JSON.parse(cookies.get('bit2bit'));
    tmp.push(numeral_word, numeral_numb); //tmp will be stored in cookies
    if (!global_container.hasOwnProperty('history')) {
      Object.defineProperty(global_container, 'history', {
        value: [tmp],
        writable: true,
        enumerable: true
      })
      cookies.set('bit2bit', JSON.stringify(global_container));
    } else { //keeps 10 savings only
      if (global_container.history.length < 10) {
        global_container.history.unshift(tmp);
        cookies.set('bit2bit', JSON.stringify(global_container));
      } else {
        global_container.history.pop();
        global_container.history.unshift(tmp);
        cookies.set('bit2bit', JSON.stringify(global_container));
      }
    }
  }

}
