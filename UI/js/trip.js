function changeTab(el, tabName) {
  var children = document.getElementById('trip-tabs').children;
  for (i = 0; i < children.length; i++) {
    children[i].classList.remove('selected');
  }
  el.classList.add('selected');
  window.shs = document.getElementById('fragments');
  var children = document.getElementById('fragments').children;

  for (i = 0; i < children.length; i++) {
    console.log(children[i]);
    children[i].classList.add('hidden');
  }
  document.getElementById(tabName).classList.remove('hidden');
}

let global_data = null;
//
// ajax callback
//
var callback = function(data) {
  data = JSON.parse(data);
  global_data = data;
  console.log(data);
  document.getElementById('trip_logo').src = base + data.media[0].url;
  document.getElementById('trip_title').innerHTML = data.title;
  document.getElementById('trip_description').innerHTML = data.description.substring(0, 103);
  document.getElementById('trip_description_long').innerHTML = data.description;
  document.getElementById('trip_date').innerHTML = 'Created at: ' + data.createdAt;
};


var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("id");
console.log(c);
ajax(base + '/trip/' + c, {
  success: callback,
  method: 'GET',
});
