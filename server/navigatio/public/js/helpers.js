const base = 'http://localhost:1337';
//
// Ajax stuff
//
function ajax(url, settings) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status == 200) {
      settings.success(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open(settings.method || 'GET', url, /* async */ true);
  xhr.send(settings.data || null);
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

function waitForElement(callback) {
  if (global_data !== null) {
    if(typeof callback === 'function')
      callback();
    else
      console.log("ERRRRRRRRRRRRRRRR");
  } else {
    setTimeout(waitForElement, 250);
  }
}

function multiplyNode(node, count, deep) {
  for (var i = 0, copy; i < count - 1; i++) {
    copy = node.cloneNode(deep);
    node.parentNode.insertBefore(copy, node);
  }
}
