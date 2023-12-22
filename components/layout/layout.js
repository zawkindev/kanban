const playGround = document.querySelector("#playGround");
const addColumnBtn = document.querySelector("#addColumn");
const columnsElement = document.querySelector("#columns")
const columns = document.querySelectorAll(".column");
const column = document.querySelectorAll(".column")[0];
const defaultBoard = fetchData().selectedBoard
const defaultColumn = fetchData().selectedColumn

function createCardElement(title, taskCount, total) {
    const div = document.createElement('div')
    div.setAttribute("class", "card duration-200 bg-content-color w-280 h-fit py-6 px-4 rounded-lg font-bold shadow-sh-color shadow-sm hover:cursor-pointer subpixel-antialiased")
    div.innerHTML =
            `
            <p class="card__title text-color capitalize">
                ${title}
            </p>
            <p class="card__status text-slate-500">${taskCount} of ${total} subtasks</p>
            `
    return div;
}

function createColumnElement(id, name, taskCount, color) {
    const div = document.createElement('div')
    div.setAttribute("class", "column relative h-fit text-color flex flex-col w-280 gap-5")
    div.setAttribute("id", id)
    div.innerHTML =
                `
                <div class="status flex flex-row w-full bg-page-color items-center font-bold font-mono  ${color} text-xs uppercase gap-2">
                    <div class="status__color h-4 w-4 gap-2 rounded-full bg-amber-300">
                    </div>
                    <span class="inline-block">${name}</span>
                    <span class="inline-block">(${taskCount})</span>
                </div>    
                `
    return div
}

function renderCards(where, whatList) {
    whatList.forEach(card => {
        const cardElement = createCardElement(card.title, 0, card.tasks.length);
        where.appendChild(cardElement);
    });
}

function renderColumns(where, whatList, newColumnElement) {
    whatList.forEach(column => {
        const columnElement = createColumnElement(column.id,column.name,column.cards.length,"text-slate-500");
        where.insertBefore(columnElement,newColumnElement);
        renderCards(document.querySelector(`#${column.id}`),column.cards)
    });
}

function renderBoard(){

}


if (columns.length === 0) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="flex flex-col gap-8 w-full items-center content-center text-center">
          <span class=" text-center text-4.5 text-[#828FA3] mx-2 md:px-5">This board is empty. Create a new column to
            get started.</span>
        <button
          class="btn rounded-full text-center py-3.5 mx-auto px-4 font-plus-jakarta-sans font-bold text-[15px] leading-5 cursor-pointer transition duration-200 ease-in-out focus:outline-none bg-primary-color  text-white hover:bg-primary-light-color"
          id="addColumn">
          +
          Add New Column
        </button>
      </div>`;
    playGround.classList.add("justify-center");
    playGround.append(div);
    makeMouseScrollable(playGround)
} else {

    renderColumns(playGround,getBoardById(defaultBoard,fetchData()).columns,document.querySelector("#newColumn"))

    // Render cards
    // const cards = getColumnById(1, 11, fetchData()).cards

    // FIX newColumn size
    const newColumn = document.querySelector('#newColumn')
    newColumn.style.height = `${findColumnWithLargestHeight().scrollHeight - 34}px`
}

let isDragging = false;
let startPosition = {x: 0, y: 0};
let scrollLeft = 0;
let scrollTop = 0;


function makeMouseScrollable(el) {
    el.addEventListener("mousedown", (e) => {
        isDragging = true;
        startPosition = {
            x: e.clientX,
            y: e.clientY,
        };
        scrollLeft = playGround.scrollLeft;
        scrollTop = playGround.scrollTop;

    });
    el.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    el.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const deltaX = e.clientX - startPosition.x;
            const deltaY = e.clientY - startPosition.y;

            playGround.scrollLeft = scrollLeft - deltaX;
            playGround.scrollTop = scrollTop - deltaY;
        }
    });
}

function stopMouseScrolling(el) {
    el.removeEventListener("mousedown", (e) => {
        isDragging = true;
        startPosition = {
            x: e.clientX,
            y: e.clientY,
        };
        scrollLeft = playGround.scrollLeft;
        scrollTop = playGround.scrollTop;

    });
    el.removeEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    el.removeEventListener("mousemove", (e) => {
        if (isDragging) {
            const deltaX = e.clientX - startPosition.x;
            const deltaY = e.clientY - startPosition.y;

            playGround.scrollLeft = scrollLeft - deltaX;
            playGround.scrollTop = scrollTop - deltaY;
        }
    });
}

function findColumnWithLargestHeight() {
    // Get all elements with the class "column"
    const columns = document.querySelectorAll('.column');

    // Initialize variables to store the maximum height and corresponding element
    let maxHeight = 0;
    let tallestColumn = null;

    // Iterate through each column
    columns.forEach((column) => {
        // Get the current column's height
        stopMouseScrolling(column)
        const columnHeight = column.scrollHeight;

        // Check if the current column is taller than the current maximum
        if (columnHeight > maxHeight) {
            // Update the maximum height and corresponding element
            maxHeight = columnHeight;
            tallestColumn = column;
        }
    });

    // Return the element with the largest height
    return tallestColumn;
}


function calculateSumOfCardHeights(column) {
    // Get all elements with the class "card"
    const cards = column.querySelectorAll('.card');

    // Initialize variable to store the sum of heights
    let sumOfHeights = 0;

    // Iterate through each card
    cards.forEach((card) => {
        // Add the height of the current card to the sum
        sumOfHeights += card.clientHeight;
    });

    // Return the sum of heights
    return sumOfHeights;
}

const boardLinks = document.querySelectorAll(".board__link")
const boardItems = document.querySelectorAll(".board__item")
boardItems.forEach(boardItem => {
    boardItem.addEventListener('click', (e) => {
        boardLinks.forEach(board => {
            board.classList.remove('active')
        })
        boardItem.querySelector('button').classList.add('active')
    })
})