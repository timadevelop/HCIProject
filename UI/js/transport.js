function filter(value) {
  var filter = value.toUpperCase();
  var lis = document.getElementsByClassName('transport_item');
  for (var i = 0; i < lis.length; i++) {
    var name = lis[i].getElementsByClassName('type')[0].innerHTML;
    if (name.toUpperCase().indexOf(filter) == 0)
      lis[i].style.display = 'list-item';
    else
      lis[i].style.display = 'none';
  }

}

window.onload = function() {

  filter('own');

waitForElement(() => initTransport());

function deleteFromScenario(e) {
  // update scenario

  alert('TODO: delete ' + e + ' from scenario');
}

function initTransport() {
  console.log('transport_item init')
  const selection = document.getElementById('transport_selection');
  selection.value = global_data.transport;
  // global_data.scenario = [...global_data.scenario, "add new one"]; // add new element
  // global_data.scenario.forEach((e) => {
  //   let s = `
  //       <li class="flex space-between horizontal">
  //         <input type="text" value="${e}" />
  //         <i onClick="deleteFromScenario('${e}')" class="fa fa-trash"></i>
  //       </li>
  //     `;
  //   list.appendChild(createElementFromHTML(s));
  // });
}
}
