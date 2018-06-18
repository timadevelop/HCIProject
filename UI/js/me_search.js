  const list = document.getElementsByClassName('trips')[0];
  //
  // ajax callback
  //
  var callback = function(data) {
    data = JSON.parse(data);
    data.forEach((e) => {
      console.log(e);
      // entry.appendChild(document.createTextNode('some'));
      let s =
        `
      <li class="trip">
        <div class="flex space-between horizontal">
          <a href="trip.html?id=${e._id}">
            <img class="flex1 trip-logo" src="${base + e.media[0].url}"/>
          </a>
          <div class="flex3 trip-content flex vertical">
            <a href="trip.html?id=${e._id}"><h4>${e.title}</h4></a>
            <p>${e.description}</p>
            <p>created : ${e.createdAt}</p>
          </div>
        </div>
<!-- <div class="flex flex1 flex-end vertical">
        <a class="btn">remove</a>
        <a class="btn">share</a>
      </div> -->

        </li>
      `;
      list.appendChild(createElementFromHTML(s));
    });
    // showRegistered(JSON.parse(text));
  };

  ajax(base + '/trip', {
    success: callback,
    method: 'GET',
  });

  function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
    }
  }

  // multiplyNode(document.querySelector('.trip'), 7, true);
