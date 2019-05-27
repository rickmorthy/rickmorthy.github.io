function widget(arr) {
  var widget = pano_promt(arr);
  for (var i = 1; i < arr.length; i++) {
    widget += pano_result(arr[i],i);
  }
  
}
