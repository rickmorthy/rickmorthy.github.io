//

class Actions {
  constructor(id) {
    this.id = id;
    // this.object = global_container[id];
    this.obj = {};
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
 // Retrieve array of value 'numeral' attribute
//  getAttribute(set) {
//   var numeral_numb = [];
//   numeral_numb.push(...set);
//   return numeral_numb.map(function(i) { return i.attributes.numeral.value});
// }
   //buildAction collects all nodes with certain selector, place picked node on the first place
   // and assign new array to these nodes.
   //Serves for reassign .dropdown-items
   buildAction(element,id){
        var button = $(element).html(),
            numeral_word = [],
            numeral_numb = [],
            target_set = [],
            collection_of_words = document.querySelectorAll('.numeral_word'+id),
            // collection_of_numbs = document.querySelectorAll('.numeral_numb'+id),
            collection_of_numbs = this.collection(id),
            collection_of_toggle = document.querySelectorAll('.widget'+id+' .dropdown-item');

            // console.log(collection_of_numbs);

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


 _conversion(this_elem,id) {
    var obj = {
        orig:this.collection(id),
        values:this.collection(id,true),
        result:[]
      };
      if (this_elem.value !== '') {
        switch (this_elem.attributes.numeral.value) {
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

}
_twos_conversion(this_elem,id){
  var manip = new Manipulation(),
      obj = {
          orig:this.collection(id),
          values:this.collection(id,true),
          result:[]
        },
      tmp  ,
      input_value = this_elem.value,
      pointer = this_elem.attributes.numeral.value,
      final_values = {};

  if (this_elem.value !== '') {
    // console.log(pointer);
    switch (pointer) {
      case '2':
      obj.result.push(
        this_elem.value,
        tmp = manip.binToDec(input_value),
        manip.decToHex(tmp)
      )
      this.assignValues.call(obj);
        break;
      case '10':
      obj.result.push(
        this_elem.value,
        tmp = manip.decToBin(input_value),
        manip.decToHex(tmp)
      );
      console.log(obj.result);
      this.assignValues.call(obj);
        break;
      case '16':
      // console.log(manip.hexToDec(input_value));
      obj.result.push(
        this_elem.value,
        tmp = manip.hexToDec(input_value),
        manip.decToBin(tmp)
      )
      this.assignValues.call(obj);
        break;
    }
    // console.log(obj.result);
   }else {
      // obj.func = () => { return ''; }
      this.assignValues.call(obj);
    }
}



}
