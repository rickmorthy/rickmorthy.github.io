
class Build {
  constructor() {

  }
  tag(){
    console.log(this);
    this.tag = (t,a,c) => {
      return `<${t} ${atrBuilder(a)}>${c}<${t}>`;
    };
    return this;
  }
  static atrBuilder(){
    var atrString
    $.each(object,(k,v)=>{
      if(v == 'undefined'){
        atrString += k+' ';
      }else{
        var atrValues = v.splice(' ');
        atrString += `${k}='`;
        for (var i = 0; i < atrValues.length; i++) {
          atrString += atrValues[i]+' ';
        }
        atrString += '\'';
      }
    });
    console.log(atrString);
  }
}
var build = new Build();
// var build = (function(){
//   console.log(this);
//   this.tag = (t,a,c) => {
//     return `<${t} ${atrBuilder(a)}>${c}<${t}>`;
//   };
//   return this;
// })($);
// console.log(build);
//
// function atrBuilder(object){
//
// }
// function test() {
//
// }
(function($) {

})(jQuery);
