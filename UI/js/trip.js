function changeTab(el, tabName) {
  var children =  document.getElementById('trip-tabs').children;
  for (i = 0; i < children.length; i++)
  {
    children[i].classList.remove('selected');
  }
  el.classList.add('selected');
  window.shs = document.getElementById('fragments');
  var children =  document.getElementById('fragments').children;

  for (i = 0; i < children.length; i++)
  {
    console.log(children[i]);
    children[i].classList.add('hidden');
  }
  document.getElementById(tabName).classList.remove('hidden');
}
