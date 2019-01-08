/* cookie utilities */
/* Copyright 2010-2018 Matthew Wall */
/* Distributed under terms of GPLv3 */

function set_cookie(name, value, dur) {
  if(dur==null || dur==0) dur=30;
  var today = new Date();
  var expire = new Date();
  expire.setTime(today.getTime() + 24*3600000*dur);
  document.cookie = cookie_prefix+name+"="+escape(value)+";expires="+expire.toGMTString();
}

function get_cookie(name, default_value) {
  if(name=="") return default_value;
  var full_name = cookie_prefix+name;
  var cookie = " "+document.cookie;
  var i = cookie.indexOf(" "+full_name+"=");
  if(i<0) i = cookie.indexOf(";"+full_name+"=");
  if(i<0) return default_value;
  var j = cookie.indexOf(";", i+1);
  if(j<0) j = cookie.length;
  return unescape(cookie.substring(i + full_name.length + 2, j));
}

function get_parameter(name) {
  var query = window.location.search.substring(1);
  if (query) {
    var vars = query.split("&");
    for (var i=0; i<vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == name) {
        return pair[1];
      }
    }
  }
  return false;
}
