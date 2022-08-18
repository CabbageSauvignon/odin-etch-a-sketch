const container = document.getElementById('container');
let gridDimension = 16;
let gridSize = 300;
let cellSize = gridSize/gridDimension;
for (let i=0; i<gridDimension; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('gridUnit', 'row');
    newRow.setAttribute('id', `row${i+1}`);
        for (let j=0; j<gridDimension; j++) {
            const newCell = document.createElement('div');
            newCell.classList.add('gridUnit', 'cell');
            newCell.setAttribute('id',`row${i+1}-cell${j+1}`);
            newCell.setAttribute('style',`height:${cellSize}px; width:${cellSize}px`)
            newRow.appendChild(newCell);
        }
    container.appendChild(newRow);
}


const gridCells = document.querySelectorAll('.cell');
gridCells.forEach(cell => cell.addEventListener('mouseenter', changeGridCells));


function changeGridCells (e) {
    const cellToChange = e.target;
    console.log(cellToChange);
    cellToChange.classList.add('black-cell')
}


