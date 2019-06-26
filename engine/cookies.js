
class Cookies {
  constructor(inputs,words) {
    this.input_collection = inputs;
    this.collection_of_labels = words;
    this.tmp_arr = [];
    this.prop_ignore = [// ignore properties in global_container when restore data to inputs
      'history',
      'key_pressed'
    ]
    this.test = [
      'a',
      'b'
    ]
  }

  fillUp(json){ // uploads result saved in cookies into widget
    var cookie = JSON.parse(json);
    for (var elem in cookie) {
      if (cookie.hasOwnProperty(elem) && Object.keys(cookie).findMatch(this.prop_ignore)) {
        var input = document.querySelectorAll('.widget'+elem+' input'),
            label = document.querySelectorAll('.numeral_word'+elem),
            toggle = document.querySelectorAll('.dropdown'+elem);

            input.forEach(function(item,i) {
              cookie[elem].values.length === 0 ? true : item.value = cookie[elem].values[i];
              if (cookie[elem].hasOwnProperty('position')) {
                item.attributes.numeral.value = cookie[elem].position[1][i]
                label[i].innerHTML = cookie[elem].position[0][i];
                toggle[i].innerHTML = cookie[elem].position[0][i];
                toggle[i].attributes.numeral.value = cookie[elem].position[1][i];
              }
            })
      }
    }
  }

  cookies_value(id,numeral_word,numeral_numb){//this.id not within scope of this function
    if (!global_container.hasOwnProperty(id)) {//if widget container doesnt exist - create one.
      global_container[id] = {};
    }
    if (!global_container[id].hasOwnProperty('position')) {
      Object.defineProperty(global_container[ id],'position',{value:{},writable:true,enumerable:true});
    }
      global_container[id].position = [numeral_word,numeral_numb];
      this.input_collection.forEach(function(item,i) {
        this.tmp_arr.push(item.value);
      },this);
      global_container[id].values = this.tmp_arr;
      cookies.set('bit2bit',JSON.stringify(global_container));

      var end = 2000,
          count_down = Date.now() - key_pressed,
          that = this;
          // Object.keys(global_container).findMatch(this.prop_ignore);
          console.log(Object.keys(global_container).findMatch(this.prop_ignore));
          return false;
          console.log(global_container.time);
          // console.log(Date.now() - key_pressed);
          // console.log(key_pressed);
          console.log(Date.now());
          console.log(Date.now() - global_container.time);
        if (Date.now() - key_pressed >= 2000) {
              console.log('Result saved in history!');
              that.set_history(numeral_numb,numeral_word);
              key_pressed = Date.now();
      }
  }

  set_history(numeral_numb,numeral_word){
    var tmp = [];
    global_container = JSON.parse(cookies.get('bit2bit'));
    tmp.push(numeral_word,numeral_numb);//tmp will be stored in cookies
    if (!global_container.hasOwnProperty('history') ) {
      Object.defineProperty(global_container,'history',{
        value:[tmp],
        writable:true,
        enumerable:true
      })
      cookies.set('bit2bit',JSON.stringify(global_container));
    }else {
      if (global_container.history.length < 10) {
        global_container.history.unshift(tmp);
        cookies.set('bit2bit',JSON.stringify(global_container));
      }else{
        global_container.history.pop();
        global_container.history.unshift(tmp);
        cookies.set('bit2bit',JSON.stringify(global_container));
      }
    }
  }

}
