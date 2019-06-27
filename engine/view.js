/// var arr = ['Decimal','Binary','Hexadecimal','Other'];
var global_container = {},
  key_pressed = 0,
  cookies_history_save_interval = 5000,
  validation_flag = true,
  reg_con = {
    'Decimal': 10,
    'Binary': 2,
    'Hexadecimal': 16,
    'Octal': 8
  },
  twos_conv = {
    'Decimal': 10,
    'Binary': 2,
    'Hexadecimal': 16
  };

// console.log(global_container);
$('.main-frame').prepend(new Control({
  obj: twos_conv,
  size: '6',
  id: '_twos_conversion', //both as selector and as method name called in Actions()
}).widget());

$('.main-frame').prepend(new Control({
  obj: reg_con,
  size: '6',
  id: '_conversion', //both as selector and as method name called in Actions()
}).widget());

$('.settings').prepend(new Control().history_widget());

// console.log(key_pressed);

var bit2bit = cookies.get('bit2bit'),
  cook = new Cookies();
if (bit2bit !== undefined) {
  global_container = JSON.parse(bit2bit);
  cook.fillUp(bit2bit);
}


console.dir(window.navigator.cookieEnabled);
console.log(cookies.get('bit2bit'));
