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
   // return false;
   input_attr_map.map(function(item,index,arr) {
     // console.dir(input_set[index].attributes.numeral);
     // console.dir(item);
     inputs[index].attributes.numeral.value = item;
   })
 // tmp = Object.keys(inputs);
 // console.log(input_attr_map);
 // console.dir(document.querySelectorAll('.widget'+id+' input'));
 }

   //buildAction collects all nodes with certain selector, place picked node on the first place
   // and assign new array to these nodes.
   //Serves for reassign .dropdown-items
   buildAction(element,id){
        var button = $(element).html(),
            numeral_word = [],
            numeral_numb = [],
            target_set = [],
            values = [],
            value_element,
            numeral_values = [],
            collection_of_words = document.querySelectorAll('.numeral_word'+id),
            collection_of_inputs = document.querySelectorAll('.widget'+id+' input'),
            collection_of_numbs = this.collection(id),
            collection_of_toggle = document.querySelectorAll('.dropdown'+id);

            collection_of_inputs.forEach(function(item,index,arr) {
            global_container['widget'+id].values[item.attributes.numeral.value] = item.value;
          });
        // this.swap_inputs(element,collection_of_inputs);
        collection_of_inputs.forEach(function (i) {
          console.log(i.attributes.numeral.value);;
        });
        // collection_of_inputs.forEach(function(item,i) {
        //   console.log(i);
        //    if (item.attributes.numeral.value === element.attributes.numeral.value) {
        //     value_element = collection_of_inputs[i];
        //     console.log(value_element);
        //   }
        // })
        console.log(collection_of_inputs);
        for (var elem in collection_of_inputs) {
          if (collection_of_inputs.hasOwnProperty(elem)) {
            // console.log(collection_of_inputs[elem].attributes.numeral.value+' <- live item');
            //   console.log(element.attributes.numeral.value+' <- 1 element');
            if (collection_of_inputs[elem].attributes.numeral.value === element.attributes.numeral.value) {
              // console.log(elem);
              // console.log(document.querySelectorAll('.widget'+id+' input'));
              // console.log(collection_of_inputs);
                value_element = collection_of_inputs[elem];
              }
          }
        }
        console.log(collection_of_inputs);
        values.push(...collection_of_inputs);
        // values.rotate(value_element);
        // console.log(values);
        // values.map(function (item,i) {
          // numeral_values.push(item.value);
        //   collection_of_inputs[i].value = item.value;
        // })
        // console.log(numeral_values);

        // .map(function (item) {
        //   console.log(item);
        //   return item.value;
        // });

        numeral_numb = this.collection(id,true);
        numeral_numb.rotate(element.attributes.numeral.value);//rotate() located in init.js

        numeral_word.push(...collection_of_words);
        numeral_word = numeral_word.map(function(i) {return i.innerHTML});
        numeral_word.rotate(element.innerHTML);//rotate() located in init.js
        // value.rotate(element)
        // for (var elem in numeral_word) {
        //   if (numeral_word.hasOwnProperty(elem)) {
        //     collection_of_words[elem].innerHTML = numeral_word[elem];
        //     if(elem > 0){
        //       collection_of_toggle[elem-1].innerHTML = numeral_word[elem];
        //     }
        //   }
        // }
        // for (var elem in numeral_numb) {
        //   if (numeral_numb.hasOwnProperty(elem)) {
        //     collection_of_numbs[elem].attributes.numeral.value = numeral_numb[elem];
        //   }
        // }
        // console.log(values);
        numeral_word.map(function(item,i,arr) {
          collection_of_words[i].innerHTML = item;
          collection_of_numbs[i].attributes.numeral.value = numeral_numb[i];
          collection_of_toggle[i].innerHTML = item;
          collection_of_toggle[i].attributes.numeral.value = numeral_numb[i];
          collection_of_inputs[i].value = values[i].value;
          // console.log(values[i].value);
        })
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
