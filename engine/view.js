// var arr = ['Decimal','Binary','Hexadecimal','Other'];
var global_container = {};
var obj = {'Decimal':10,'Binary':2,'Hexadecimal':16,'Octal':8};


// var main_widget = new Control(obj,'6',1);
// $('.main-frame').prepend(main_widget.widget());
// var main_widget = ;
$('.main-frame').prepend(new Control({
obj:obj,
size:'6',
id:1,
}).widget());
// console.log(parseInt('c',16).toString());
