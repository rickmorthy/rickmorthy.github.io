class Cookies {
  constructor(inputs,words) {
    this.input_collection = inputs;
    this.collection_of_labels = words;
    this.tmp_arr = [];
    console.log(this.tmp_arr);
  }
  test(){
    console.log('this is test');
  }

  fillUp(json){
    console.log('HERE');

    var cookie = JSON.parse(json);
    for (var elem in cookie) {
      // console.log(typeof elem);
      if (cookie.hasOwnProperty(elem) && elem !== 'history') {
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

  cookies_value(id){
    if (!global_container.hasOwnProperty( id)) {//if widget container doesnt exist - create one.
      global_container[id] = {};
    }
    if (!global_container[ id].hasOwnProperty('values')) {
      Object.defineProperty(global_container[ id],'values',{value:[],writable:true,enumerable:true});
    }
      // var tmp_arr = [];
      this.input_collection.forEach(function(item,i) {
        this.tmp_arr.push(item.value);
      },this);
      global_container[ id].values = this.tmp_arr;
      cookies.set('bit2bit',JSON.stringify(global_container));
      this.set_history();
  }

  cookies_position(id,numeral_numb,numeral_word){//this.id not within scope of this function
    if (!global_container.hasOwnProperty( id)) {//if widget container doesnt exist - create one.
      global_container[ id] = {};
    }
    if (!global_container[ id].hasOwnProperty('position')) {
      Object.defineProperty(global_container[ id],'position',{value:{},writable:true,enumerable:true});
    }
      global_container[ id].position = [numeral_word,numeral_numb];
      // var tmp_arr = [];
      this.input_collection.forEach(function(item,i) {
        this.tmp_arr.push(item.value);
      },this);
      global_container[ id].values = this.tmp_arr;
      cookies.set('bit2bit',JSON.stringify(global_container));
  }

  set_history(arr){
    var tmp = [];
    // console.log(this.collection_of_labels);
        this.collection_of_labels.forEach(function(item) {
          tmp.push(item.innerHTML);
        },this);
    Object.defineProperty(global_container,'history',{
      value:[tmp,this.tmp_arr],
      writable:true,
      enumerable:true
    })
    console.log(cookies.get('bit2bit'));
    console.log(global_container);
  }
}
