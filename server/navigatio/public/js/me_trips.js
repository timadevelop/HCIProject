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
        </li>
      `;
    list.appendChild(createElementFromHTML(s));
  });
};

ajax(base + '/trip', {
  success: callback,
  method: 'GET',
});
