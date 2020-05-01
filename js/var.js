function getUrlParameter(parameter) {
  var url = location.href;

  if (url.indexOf('?') != -1) {
    var tempPar = "";
    var ary = url.split('?')[1].split('&');
    for (i = 0; i < ary.length; i++) {
      if (ary[i].split('=')[0] == parameter)
        tempPar = ary[i].split('=')[1];
    }
  }
  return parseInt(tempPar);
}