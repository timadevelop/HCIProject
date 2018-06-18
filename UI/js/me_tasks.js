// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

setTimeout(() => waitForElement(initTasks), 1000);

function initTasks() {
  console.log('tasks init')

  const list = document.getElementById('trip_tasks_list');
  global_data.tasks.forEach((e) => {
    let s = `
    <li class="">
      <div class="flex space-between horizontal">
        <input  class="flex2" type="text" value="${e.text}"/>
        <p class="flex2">til ${e.date}</p>
        <div class="flex flex2 flex-end horizontal">
          <i onclick="openModal()" class="fa fa-clock-o"></i>
          <i class="fa fa-check"></i>
          <i class="fa fa-trash"></i>
        </div>
      </div>
    </li>
    `;
    list.appendChild(createElementFromHTML(s));
  });
}
