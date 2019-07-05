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

// window.innerWidth >= 992 ? append_history = '.history'  : append_history = '.sm-history' ;
// window.innerWidth >= 992 ? append_history = $('#main').parent()  : append_history = '.sm-history' ;
$('#main').parent().append(new Control().history_widget());

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
    if (global_container.hasOwnProperty('settings') && global_container.settings.dont_remember_results !== true) {
      cook.fillUp(bit2bit);
    }else {

    }
  }
  if (window.innerWidth >= 992  ) {
    if (global_container.hasOwnProperty('settings') && global_container.settings.history === true  ) {
      if(global_container.hasOwnProperty('history') && Object.keys(global_container.history).length > 0){

      // console.log('<992');
      $('.history').removeClass('col-12').addClass('col-6');
      $('#main').removeClass('col-12').addClass('col-6');
      $('.history').removeClass('hidden');
      }
    }

  }else {
    $('#settings').parent().removeClass('dropright').addClass('dropleft');
  }
  }())
