console.log('here');

function deleteFromScenario(e) {
  // update scenario

  alert('TODO: delete ' + e + ' from scenario');
};

function initScenario() {
  console.log('init Scenario');
  const list = document.getElementById('scenario-list');
  global_data.scenario = [...global_data.scenario, "add new one"]; // add new element
  global_data.scenario.forEach((e) => {
    let s = `
        <li class="flex space-between horizontal">
          <input type="text" value="${e}" />
          <i onClick="deleteFromScenario('${e}')" class="fa fa-trash"></i>
        </li>
      `;
    list.appendChild(createElementFromHTML(s));
  });
};
setTimeout( () => waitForElement(() => initScenario()), 1000);
