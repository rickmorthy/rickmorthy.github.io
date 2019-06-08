// var arr = ['Decimal','Binary','Hexadecimal','Other'];
var global_container = {},
    reg_con = {'Decimal':10,'Binary':2,'Hexadecimal':16,'Octal':8},
    twos_conv = {'Decimal':10,'Binary':2,'Hexadecimal':16};

// console.log(global_container);
$('.main-frame').prepend(new Control({
  obj:twos_conv,
  size:'6',
  id:'_twos_conversion',//both as selector and as method name called in Actions()
}).widget());

$('.main-frame').prepend(new Control({
obj:reg_con,
size:'6',
id:'_conversion',//both as selector and as method name called in Actions()
}).widget());
