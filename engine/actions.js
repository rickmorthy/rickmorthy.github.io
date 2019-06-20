//

class Actions extends Valid{
  constructor(element,id,flag) {
    super(flag);
    this.id = id;
    // console.log(this.id);
    this.element = element;
    this.input_collection = document.querySelectorAll('.widget'+this.id+' input');
    // this.object = global_container[id];
    this.obj = {};
    // console.log(this.input_collection[0]);
  }
  check(){
    super.check();
  }
  // get input_collection(){
  //   return document.querySelectorAll('.widget'+this.id+' input');
  // }
  // set_cookies(id){
  //   var obj = {};
  //   // this.inputs_collection.
  //   console.log(this.input_collection);
  //   global_container['widget'+id] = {values:{}};
  //   this.input_collection.forEach(function(item) {
  //     console.log(this);
  //     global_container['widget'+id].values[item.attributes.numeral.value] = item.value;
  //   })
  //   console.log(JSON.stringify(global_container));
  //   // this.cookies(this.id);
  // }
  addEvent(){
    // if (this.element.onkeypress === null) {
    //   this.element.onkeypress = new Valid(this.element);
    // }
    this.element.onkeypress = this.check();
    // console.dir(this.flag);
    return this;
  }
  // Sets value to array of Elements
 assignValues() {
   for (var i = 1; i < this.orig.length; i++) {
     // console.log(this.result[i]);
     this.result.length === 0 ? this.orig[i].value = '' : this.orig[i].value = this.result[i];//check of this properties exist int THIS object
   }
 }
 collection(id,bool){
   var collection_of_numbs = document.querySelectorAll('.numeral_numb'+id),
       numeral = [];
       numeral.push(...collection_of_numbs);
       if(bool === true){
         return numeral.map(function(i) { return i.attributes.numeral.value});
       } else {
         return collection_of_numbs;
       }
 }
 swap_inputs(element,input_set){
   var inputs = input_set,
       tmp,
       input_attr_map = [];
       console.log(inputs);
       inputs.forEach(function(item) {
         input_attr_map.push(item.attributes.numeral.value);
       });
   for (var elem in inputs) {//saves and delete picked input that matches dropdown element
     if (inputs.hasOwnProperty(elem)) {
       if (inputs[elem].attributes.numeral.value === element.attributes.numeral.value) {
         tmp = inputs[elem].attributes.numeral.value;//save matched attributes
         input_attr_map.splice(input_attr_map.indexOf(inputs[elem].attributes.numeral.value),1);//remove it from attributes set
       }
     }
   }
   input_attr_map.unshift(tmp);
   input_attr_map.map(function(item,index,arr) {
     inputs[index].attributes.numeral.value = item;
   })
 }

   //buildAction collects all nodes with certain selector, place picked node on the first place
   // and assign new array to these nodes.
   //Serves for reassign .dropdown-items
   buildAction(){
     // console.log(this.input_collection);
        var button = $(this.element).html(),
            numeral_word = [],
            numeral_numb = [],
            target_set = [],
            values = [],
            value_element,
            numeral_values = [],
            collection_of_words = document.querySelectorAll('.numeral_word'+this.id),
            collection_of_inputs = this.input_collection,
            collection_of_numbs = this.collection(this.id),
            collection_of_toggle = document.querySelectorAll('.dropdown'+this.id);
            console.log(this.id);
          //   this.input_collection.forEach(function(item,index,arr) {
          //   global_container['widget'+this.id].values[item.attributes.numeral.value] = item.value;
          // });

        this.input_collection.forEach(function(i) {
          values.push(i.value);
        })
        for (var elem in this.input_collection) {
          if (this.input_collection.hasOwnProperty(elem)) {
            if (this.input_collection[elem].attributes.numeral.value === this.element.attributes.numeral.value) {
              value_element = this.input_collection[elem].value;
              }
          }
        }
        values.rotate(value_element);

        numeral_numb = this.collection(this.id,true);
        numeral_numb.rotate(this.element.attributes.numeral.value);//rotate() located in init.js
        numeral_word.push(...collection_of_words);
        numeral_word = numeral_word.map(function(i) {return i.innerHTML});
        numeral_word.rotate(this.element.innerHTML);//rotate() located in init.js

        numeral_word.map(function(item,i,arr) {
          collection_of_words[i].innerHTML = item;
          collection_of_numbs[i].attributes.numeral.value = numeral_numb[i];
          collection_of_toggle[i].innerHTML = item;
          collection_of_toggle[i].attributes.numeral.value = numeral_numb[i];
          // console.log(this);
          collection_of_inputs[i].value = values[i];
          console.log(values[i]);
        })
        this.cookies_position(this.id,numeral_numb);
};


 _conversion() {
   // this.eventListener();
   if (this.falg === true) {
     var obj = {
         orig:this.collection(this.id),
         values:this.collection(this.id,true),
         result:[]
       };
       if (this.element.value !== '') {
         switch (this.element.attributes.numeral.value) {
           case '16':
           obj.orig.forEach(function(item) {
             obj.result.push(parseInt(obj.orig[0].value,16).toString(item.attributes.numeral.value));
           });
           this.assignValues.call(obj);
             break;
           case '2':
           obj.orig.forEach(function(item) {
             obj.result.push(parseInt(obj.orig[0].value,2).toString(item.attributes.numeral.value));
           });
           this.assignValues.call(obj);
             break;
           default:
           obj.orig.forEach(function(item) {
             obj.result.push(parseInt(obj.orig[0].value).toString(item.attributes.numeral.value));
           });
           this.assignValues.call(obj);
         }
       }else {
         this.assignValues.call(obj);
       }
       this.cookies_value(this.id);
       return this;
   }

}
_twos_conversion(){
  // this.eventListener();
  // console.dir(window.getEventListeners());
  if (this.flag === true) {
    var manip = new Manipulation(),
        obj = {
            orig:this.collection(this.id),
            values:this.collection(this.id,true),
            result:[]
          },
        tmp  ,
        input_value = this.element.value,
        pointer = this.element.attributes.numeral.value,
        final_values = {};

    if (this.element.value !== '') {
      // console.log(pointer);
      switch (pointer) {
        case '2':
        obj.result.push(
          this.element.value,
          tmp = manip.b2d(input_value),
          manip.b2h(input_value)//<----!!!!
        )
        this.assignValues.call(obj);
          break;
        case '10':
        obj.result.push(
          this.element.value,
          manip.d2b(input_value),
          manip.d2h(input_value)
        );
        this.assignValues.call(obj);
          break;
        case '16':
        // console.log(manip.hexToDec(input_value));
        obj.result.push(
          this.element.value,
          tmp = manip.h2d(input_value),
          manip.d2b(tmp)
        )
        this.assignValues.call(obj);
          break;
      }
      // console.log(obj.result);
     }else {
        // obj.func = () => { return ''; }
        this.assignValues.call(obj);
      }
      this.cookies_value(this.id);
      return this;
  }

}
cookies_value(id){

  if (!global_container.hasOwnProperty('widget'+id)) {
    Object.defineProperty(global_container,'widget',{})
  }else{
    !global_container['widget'+id].hasOwnProperty(value) ? global_container['widget'+id] = {values:{}} : true;
  }
  // if (!global_container['widget'+id].hasOwnProperty(values)) {
  // }
console.log(global_container);
  this.input_collection.forEach(function(item) {
    console.log(this);
    global_container['widget'+id].values[item.attributes.numeral.value] = item.value;
  })
  console.log(JSON.stringify(global_container));
  // this.cookies(this.id);
}
cookies_position(id,position){//this.id not within scope of this function
  !global_container['widget'+id] ? global_container['widget'+id] = {position:{}} : true;
  this.input_collection.forEach(function(item) {
    console.log(this);
    global_container['widget'+id].position = position;
  })
  console.log(global_container);
  console.log(JSON.stringify(global_container));

}


}
