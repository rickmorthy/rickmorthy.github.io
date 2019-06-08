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
     this.orig[i].value = this.func(this.orig[0].value,i);//check of this properties exist int THIS object
   }
 }
 // Retrieve array of value 'numeral' attribute
 getAttribute(set) {
  var numeral_numb = [];
  numeral_numb.push(...set);
  return numeral_numb.map(function(i) { return i.attributes.numeral.value});
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
            collection_of_numbs = document.querySelectorAll('.numeral_numb'+id),
            collection_of_toggle = document.querySelectorAll('.widget'+id+' .dropdown-item');

        numeral_numb = this.getAttribute(collection_of_numbs);
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
  var collection_of_numbs = document.querySelectorAll('.numeral_numb'+id),
      numeral = this.getAttribute(collection_of_numbs);

      this.obj = {
        orig:collection_of_numbs,
        values:numeral,
      }
      // This statement desides what value return to call function and then assign to DOM node
      if (this_elem.value !== '') {
        switch (this_elem.attributes.numeral.value) {
          case '16':
          this.obj.func = function(input_numb,i){
                return parseInt(input_numb,16).toString(this.values[i]);
              }
          this.assignValues.call(this.obj);
            break;
          case '2':
          this.obj.func = function(input_numb,i){
                return parseInt(input_numb,2).toString(this.values[i]);
              }
          this.assignValues.call(this.obj);
            break;
          default:
          this.obj.func = function(input_numb,i) {//input is decimal or octal
                return parseInt(input_numb).toString(this.values[i]);
              }
          this.assignValues.call(this.obj);

        }
      }

}
_twos_conversion(this_elem,id){

}


//{
// orig: collection of input nodes
// values: numeral system to wich number will be converted
// func: actual function that converts input number
//}

}
console.log(new Actions());
// global_container.prototype._convertion = function (this_elem,id) {
//   var collection_of_numbs = document.querySelectorAll('.numeral_numb'+id),
//       numeral = this.getAttribute(collection_of_numbs);
//
//       this.obj = {
//         orig:collection_of_numbs,
//         values:numeral,
//       }
//       // This statement desides what value return to call function and then assign to DOM node
//       if (this_elem.value !== '') {
//         switch (this_elem.attributes.numeral.value) {
//           case '16':
//           this.obj.func = function(input_numb,i){
//                 return parseInt(input_numb,16).toString(this.values[i]);
//               }
//           this.assignValues.call(this.obj);
//             break;
//           case '2':
//           this.obj.func = function(input_numb,i){
//                 return parseInt(input_numb,2).toString(this.values[i]);
//               }
//           this.assignValues.call(this.obj);
//             break;
//           default:
//           this.obj.func = function(input_numb,i) {//input is decimal or octal
//                 return parseInt(input_numb).toString(this.values[i]);
//               }
//           this.assignValues.call(this.obj);
//
//         }
//       }
// };
