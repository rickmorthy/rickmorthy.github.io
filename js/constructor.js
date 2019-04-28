function getHtml(x,y=''){
    if(y.length > 1 && typeof String(y)){
        return x+'.html';
    }else{
  return y+'/'+x+'.html';
    }
}
function Wind(x){
  this.x = x;
}
Wind.prototype.test = function (arguments) {
  console.log('This wokrs');
  $('body').load(getHtml('window','../blocks'));

};

var f = new Wind();
f.test();
