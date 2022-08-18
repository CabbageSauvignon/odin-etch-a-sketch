const container = document.getElementById('container');

let initialGridSize = 32;
createGrid(initialGridSize);

const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener('click', createNewGrid);


function createGrid(gridDimension) {
    
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
    
}

function changeGridCells (e) {
    const cellToChange = e.target;
    console.log(cellToChange);
    cellToChange.classList.add('black-cell')
}

function createNewGrid () {
    newGridDimension = Number(prompt("Choose the number of squares per side. (max 100)"));
    if (newGridDimension == NaN) {
        alert("Please enter a number value between 1 and 100.");
        return;
    }
    else {
        newGridDimension = Math.round(newGridDimension);
        if (newGridDimension > 100) {
            alert("Number entered is greater than 100. 100x100 grid will be created instead");
            newGridDimension = 100;
        }
        else if (newGridDimension < 0) {
            alert("Number entered is less than 1. 1x1 grid will be created instead");
            newGridDimension = 1;
        }
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(newGridDimension);
    }
}


