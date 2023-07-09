// Selecting the tower elements
let t1 = document.querySelector('#t1');
let t2 = document.querySelector('#t2');
let t3 = document.querySelector('#t3');

// Array to store the active disc
let activeDisc = [];

// Variable to store the total moves
let totalMoves = 0;

// Event listener for disc selection
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('disc')) {
    let currentDisc = e.target;
    let beforeDisc = e.target.previousElementSibling;
    if (beforeDisc == null) {
      activeDisc.unshift(currentDisc);
      activeDisc[0].classList.add('active');
    }
  }
});

// Event listener for disc placement
document.addEventListener('click', function(e) {
  if (activeDisc.length > 0) {   // disc is active
    if (e.target === activeDisc[0]) {
      return;
    } 
    else {
      activeDisc[0].classList.remove('active');
      let moves = document.querySelector('.moves');
      totalMoves = totalMoves + 1;
      moves.innerHTML = totalMoves;
      activeDisc = [];
    }
  }
});

// Event listener for tower 1
t1.addEventListener('click', function(e) {
  if (activeDisc.length > 0) {
    updateDisc('t1');
  }
});

// Event listener for tower 2
t2.addEventListener('click', function(e) {
  if (activeDisc.length > 0) {
    updateDisc('t2');
  }
});

// Event listener for tower 3
t3.addEventListener('click', function(e) {
  if (activeDisc.length > 0) {
    updateDisc('t3');
    checkDiscs(document.querySelector('.t3d'));
  }
});

// Function to update the disc
function updateDisc(tower) {
  let towerDisc = document.querySelector(`.${tower}d`);
  let beforeDisc = towerDisc.children[0];
  let activeWeight = activeDisc[0].id.slice(-1);
  if (beforeDisc != undefined) {
    let beforeWeight = beforeDisc.id.slice(-1);
    if (activeWeight > beforeWeight) {
      return;
    }
  }
  towerDisc.prepend(activeDisc[0]);
}

// Function to check if all discs are on the destination tower
function checkDiscs(array) {
    if (array.children.length == 3) {
      alert('Good Job! You Won the game ');
      location.reload();
    }
  }