const addBtn = document.querySelector(`.submit-btn`);
const inputfeild = document.querySelector(`.feild_input`);
const darkbtn = document.querySelector(`.dark-btn`);
const items = document.querySelector(`.element2`);
const styling = document.body;
const todolist = document.querySelector(`.items_list`);
const deletebtn = document.querySelector(`.remove`);
const changetheme = document.querySelector(`.change_theme`);
const searchel = document.querySelector(`.search`);
const empty = document.querySelector(`.error`);
const noplayer = document.querySelector(`.noplayer`);

const player_names = [`MS Dhoni`, `Virat Kohli`, `Rohith Sharma`];

player_names.forEach(function (n, i) {
  todolist.innerHTML += `<li>
          ${n} <button class="remove" onclick="deleteelement(${i})"><strong>&times;</strong></button>
        </li>`;
});

// Search

searchel.addEventListener("keyup", function (e) {
  todolist.innerHTML = " ";
  let element = e.target.value.toLowerCase();

  let players = [];

  for (i = 0; i <= player_names.length - 1; i++) {
    if (player_names[i].toLowerCase().includes(element)) {
      players.push(player_names[i]);
    }
  }

  players.forEach(function (n, i) {
    todolist.innerHTML += `<li>
          ${n} <button class="remove" onclick="deleteelement(${i})"><strong>&times;</strong></button>
        </li>`;
  });
});

//------------

inputfeild.addEventListener(`keydown`, function () {
  empty.innerHTML = ``;
});

document.addEventListener(`keyup`, function (e) {
  if (e.key === `Enter`) {
    let input = inputfeild.value;
    if (input != ``) {
      input = input[0].toUpperCase() + input.slice(1).toLowerCase();
    }
    if (player_names.includes(input)) {
      empty.innerHTML = `Player Already Exist`;
    } else {
      addexecte();
    }
  }
});

addBtn.addEventListener(`click`, function () {
  let input = inputfeild.value;

  if (player_names.includes(input)) {
    empty.innerHTML = `Player Already Exist`;
  } else {
    addexecte();
  }
});

function addexecte() {
  noplayer.innerHTML = ``;
  let input = inputfeild.value;

  if (input == ``) {
    empty.innerHTML = `Please Enter the Player Name`;
  } else {
    input = input[0].toUpperCase() + input.slice(1).toLowerCase();
    player_names.push(input);
    showlist();
    inputfeild.value = "";
  }
}

function showlist() {
  todolist.innerHTML = " ";
  player_names.forEach(function (n, i) {
    todolist.innerHTML += `<li>
          ${n} <button class="remove" onclick="deleteelement(${i})"><strong>&times;</strong></button>
        </li>`;
  });
}

function deleteelement(i) {
  player_names.splice(i, 1);
  showlist();
  if (player_names.length == 0) {
    noplayer.innerHTML = `No Players Exist`;
  }
}

darkbtn.addEventListener(`click`, function () {
  styling.classList.toggle("dark-mode");
});

let theme = `Dark`;

darkbtn.addEventListener(`click`, function () {
  if (theme == `Light`) {
    darkbtn.innerHTML = `
            <svg
          xmlns="http://www.w3.org/2000/svg"
          class="moon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>`;
  }

  if (theme == `Dark`) {
    darkbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
     class="moon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor" 
    stroke-width="2">
  
    <path stroke-linecap="round" 
    stroke-linejoin="round" 
    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;
  }

  if (theme == `Light`) {
    theme = `Dark`;
  } else if (theme == `Dark`) {
    theme = `Light`;
  }
});
