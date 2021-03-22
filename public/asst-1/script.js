const positions = {
  pos1: ['pos2', 'pos4'],
  pos2: ['pos1', 'pos5', 'pos3'],
  pos3: ['pos2', 'pos6'],
  pos4: ['pos1', 'pos5', 'pos7'],
  pos5: ['pos2', 'pos4', 'pos6', 'pos8'],
  pos6: ['pos3', 'pos5', 'pos9'],
  pos7: ['pos4', 'pos8'],
  pos8: ['pos7', 'pos5', 'pos9'],
  pos9: ['pos8', 'pos6']
};

function clickAPiece(event, tileArray) {
  console.log(event.target.innerText);
  const clickedClasses = [...event.target.classList]; // what position does this have assigned?
  const unassigned = positions.find((position) => {
    // what position is not used in the array?
    // pos1
    // tileArray.find map/etc for position that is !.includes
  });
}

async function windowActions() {
  const tiles = document.querySelectorAll('.tile');
  console.log(tiles);
  const tileArray = [...tiles];
  console.log('tiles', tileArray);
  tileArray.forEach((tile) => tile.addEventListener('click', (event) => { clickAPiece(event, tileArray); }));
}

window.onload = windowActions;