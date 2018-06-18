setTimeout(() => waitForElement(initChecklist), 1000);

function initChecklist() {
  console.log('checklist init')

  const list = document.getElementById('trip_checklist');
  console.log('list checklist is ');
  console.log(list);
  ajax(base + '/checklist/' + global_data.checklist.id, {
    success: (data) => {
      data = JSON.parse(data);
      data.tasks.forEach((e) => {
        console.log(e.text);
        let s = `
            <li class="">
              <div class="flex space-between horizontal">
                <input type="text" value="${e.text}"/>
                <div class="flex flex-end horizontal">
                    <i class="fa fa-check"></i>
                    <i class="fa fa-trash"></i>
                      <i class="fa fa-clock-o"></i>
                </div>
              </div>
            </li>
          `;
        list.appendChild(createElementFromHTML(s));
        console.log(list);
      });

    },
    method: 'GET',
  });
}
