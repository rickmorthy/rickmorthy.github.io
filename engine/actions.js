//

class Actions extends Valid{
  constructor(element,id,flag) {
    super(flag);
    this.id = id;
    this.element = element;
    // this.object = global_container[id];
    this.obj = {};
  }
  check(){
    super.check();
  }
  addEvent(){
    // if (this.element.onkeypress === null) {
    //   this.element.onkeypress = new Valid(this.element);
    // }
    this.element.onkeypress = this.check();
    console.dir(this.flag);
    return this;
  }
  // Sets value to array of Elements
 assignValues() {
   for (var i = 1; i < this.orig.length; i++) {
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
   for (var elem in inputs) {
     if (inputs.hasOwnProperty(elem)) {
       // console.log(elem);
       if (inputs[elem].attributes.numeral.value === element.attributes.numeral.value) {
         tmp = inputs[elem].attributes.numeral;
         delete inputs[elem];
       }
     }
   }

   inputs.forEach(function(item) {
     input_attr_map.push(item.attributes.numeral);
   });
   input_attr_map.unshift(tmp);
   input_attr_map.map(function(item,index,arr) {
     console.dir(input_set[index].attributes);
     // inputs[index].attributes.numeral = item;
   })
 // tmp = Object.keys(inputs);
 console.log(input_attr_map);
 // console.dir(tmp);
 }

   //buildAction collects all nodes with certain selector, place picked node on the first place
   // and assign new array to these nodes.
   //Serves for reassign .dropdown-items
   buildAction(element,id){
        var button = $(element).html(),
            numeral_word = [],
            numeral_numb = [],
            target_set = [],
            collection_of_words = document.querySelectorAll('.numeral_word'+id),
            collection_of_inputs = document.querySelectorAll('.widget'+id+' input'),
            collection_of_numbs = this.collection(id),
            collection_of_toggle = document.querySelectorAll('.widget'+id+' .dropdown-item');

            collection_of_inputs.forEach(function(item,index,arr) {
            global_container['widget'+id].values[item.attributes.numeral.value] = item.value;
          });

        this.swap_inputs(element,collection_of_inputs);

        numeral_numb = this.collection(id,true);
        numeral_numb.rotate(element.attributes.numeral.nodeValue);//rotate() located in init.js

        numeral_word.push(...collection_of_words);
        numeral_word = numeral_word.map(function(i) {return i.innerHTML});
        numeral_word.rotate(element.innerHTML);//rotate() located in init.js

        for (var elem in numeral_word) {
          if (numeral_word.hasOwnProperty(elem)) {
            collection_of_words[elem].innerHTML = numeral_word[elem];
            if(elem > 0){
              collection_of_toggle[elem-1].innerHTML = numeral_word[elem];
            }
          }
        }
        for (var elem in numeral_numb) {
          if (numeral_numb.hasOwnProperty(elem)) {
            collection_of_numbs[elem].attributes.numeral.value = numeral_numb[elem];
          }
        }
};


 _conversion(id) {
   // this.eventListener();
   if (this.falg === true) {
     var obj = {
         orig:this.collection(id),
         values:this.collection(id,true),
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
       return this;
   }


}
_twos_conversion(id){
  // this.eventListener();
  // console.dir(window.getEventListeners());
  if (this.flag === true) {
    var manip = new Manipulation(),
        obj = {
            orig:this.collection(id),
            values:this.collection(id,true),
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
      return this;
  }

}



}
