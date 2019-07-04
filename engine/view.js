/// var arr = ['Decimal','Binary','Hexadecimal','Other'];
// var global_container = {},
var  key_pressed = 0,
  cookies_history_save_interval = 5000,
  validation_flag = false,
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
  },
  append_history;

/////////////////////////////
//  bit conversion
////////////////////////////
$('.main-frame').prepend(new Control({
  obj: twos_conv,
  size: '6',
  id: '_twos_conversion',
}).widget());

/////////////////////////////
//  twos complement to twos complement conversion
////////////////////////////
$('.main-frame').prepend(new Control({
  obj: reg_con,
  size: '6',
  id: '_conversion',
}).widget());


/////////////////////////////
//  display history
////////////////////////////

window.innerWidth >= 992 ? append_history = '.history'  : append_history = '.sm-history' ;
$(append_history).prepend(new Control().history_widget());

/////////////////////////////
//  settings widget
////////////////////////////
$('.settings.dropdown-menu').prepend(new Control().settings_widget());

///////////////////////////
// Fills up inputs if checkbox checked
///////////////////////////
(function () {
  var bit2bit = cookies.get('bit2bit'),
  cook = new Cookies();
  if (cookies.get('bit2bit') !== undefined) {
    global_container = JSON.parse(bit2bit);
    if (global_container.settings.remember_results = true) {
      cook.fillUp(bit2bit);
    }
  }
}())
