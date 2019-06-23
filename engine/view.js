/// var arr = ['Decimal','Binary','Hexadecimal','Other'];
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

// if (document.readyStaxte === 'complete') {

  // console.log(document.readyState);
  // console.log('its alive');
  var bit2bit = cookies.get('bit2bit');
  // console.log(cookies.get('bit2bit'));
  // return false;op
  if (bit2bit !== undefined) {
    global_container = JSON.parse(bit2bit);
    // console.log(JSON.parse(bit2bit));
    fillUp(bit2bit);
  }
// }
function fillUp(json){
  var cookie = JSON.parse(json);
  for (var elem in cookie) {
    console.log(elem);
    if (cookie.hasOwnProperty(elem)) {
      var input = document.querySelectorAll('.widget'+elem+' input'),
          label = document.querySelectorAll('.numeral_word'+elem),
          toggle = document.querySelectorAll('.dropdown'+elem);

          console.log(json);
          input.forEach(function(item,i) {
            cookie[elem].values.length === 0 ? true : item.value = cookie[elem].values[i];
            if (cookie[elem].hasOwnProperty('position')) {
              item.attributes.numeral.value = cookie[elem].position[1][i]
              label[i].innerHTML = cookie[elem].position[0][i];
              toggle[i].innerHTML = cookie[elem].position[0][i];
              toggle[i].attributes.numeral.value = cookie[elem].position[1][i];
            }
            // !cookie[elem].hasOwnProperty('position') ? true : item.attributes.numeral.value = cookie[elem].position[1][i];
            // console.log(label[i].innerHTML);

          })
    }
  }
}
