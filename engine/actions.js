//
class Actions {
  constructor(id) {
    this.id = id;
    this.object = global_container[id];
    this.obj = {};
  }
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
            console.log(collection_of_numbs);

        numeral_numb = getAttribute(collection_of_numbs);
        console.log(numeral_numb);
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

 convertion(this_elem,id) {
  console.log(this_elem);
  var collection_of_numbs = document.querySelectorAll('.numeral_numb'+id),
      numeral = this.getAttribute(collection_of_numbs);

      this.obj = {
        orig:collection_of_numbs,
        values:numeral,
      }

      if (this_elem.value !== '') {
        this.obj.func = 'regular';
        this.assignValues.call(obj);
      }else {
        if(this_elem.attributes.numeral.value === '16'){
          this.obj.func = 'hex';
          this.assignValues.call(obj);
        }
        this.obj.func = 'empty';
        assignValues.call(obj);
      }

}
//{
// orig: collection of input nodes
// values: numeral system to wich number will be converted
// func: actual function that converts input number
//}
 assignValues() {
   console.log(this);
  for (var i = 1; i < this.orig.length; i++) {
    // console.log(this.);
    this.orig[i].value = this.func(parseInt(this.orig[0].value),this.values[i]);//check of this properties exist int THIS object
  }
  // this.result =
}
set setFunction(type){
  switch (type) {
    case 'regular':
    this.obj.func = function(input_numb,numeral) {
      return input_numb.toString(numeral);
    }
      break;
    case 'hex':
    this.obj.func = function(input_numb,numeral){
      this.obj.func = parseInt(input_numb,16).toString(numeral);
    }
    case 'empty':
    this.obj.func = function(){
      return collection_of_numbs[i].value = '';
    }
  }

}
}
