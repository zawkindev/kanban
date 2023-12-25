const playGround = document.querySelector("#playGround");
const addColumnBtn = document.querySelector("#addColumn");
const columnsElement = document.querySelector("#columns")
const columns = document.querySelectorAll(".column");
const column = document.querySelectorAll(".column")[0];
let selectedBoard = fetchData().selectedBoard
let selectedColumn = fetchData().selectedColumn

function createCardElement(cardId, title, tasks, total) {
    const div = document.createElement('div')
    div.setAttribute("class", "card toggle-modal-button bg-content-color w-280 h-fit py-6 px-4 rounded-lg font-bold shadow-sh-color shadow-sm hover:cursor-pointer hover:text-primary-color subpixel-antialiased")
    div.setAttribute("id", cardId)
    div.setAttribute("tasks", JSON.stringify(tasks))
    div.setAttribute("modal-id", "edit-task-modal")
    div.innerHTML =
        `
            <p class="card__title text-color capitalize">
                ${title}
            </p>
            <span class="card__status text-slate-500">${tasks.length} of ${total} subtasks</span>
            `
    return div;
}

function createColumnElement(id, name, taskCount, color) {
    const div = document.createElement('div')
    div.setAttribute("class", "column relative h-fit h-min-[60px] text-color flex flex-col w-280 gap-5")
    div.setAttribute("id", id)
    div.innerHTML =
        `
                <div class="status flex flex-row w-full bg-page-color items-center font-bold font-mono  ${color} text-xs uppercase gap-2">
                    <div class="status__color h-4 w-4 gap-2 rounded-full bg-amber-300">
                    </div>
                    <span class="inline-block column-name">${name}</span>
                    <span class="inline-block">(${taskCount})</span>
                </div>    
                `
    return div
}

// function createBoardElement(id,name,columns){
//    const div document.createElement("div")
// }

function createBoardElement(id, name, selected) {
    const div = document.createElement('li');
    div.setAttribute("class", "board__item active min-w-[240px] flex items-start cursor-pointer transition duration-400 ease-in-out focus:outline-none hover:opacity-80 text-[#828FA3] text-[15px]");
    div.setAttribute("id", id)
    div.innerHTML = `
              <button
                class="btn ${selected ? "active" : ""} board__link w-full flex items-center gap-4 text-[#828fa3] rounded-r-full text-left font-plus-jakarta-sans font-bold cursor-pointer transition duration-200 ease-in-out text-[15px] focus:outline-none hover:bg-btn-hover-color hover:text-primary-color md:mr-6 p-[10px] md:py-4 px-6"
                 >
                <i class="icon-layout block mr-4"></i>
                <span class="block pr-15">${name}</span>
              </button>
    `
    return div;
}

function createEmptyColumn() {
    const div = document.createElement('div')
    div.setAttribute("id", "newColumn")
    div.setAttribute("class", "toggle-modal-button w-280 h-fit mt-9 flex rounded-md bg-gradient-primary cursor-pointer items-center content-center overflow-visible p-5 mb-48")
    div.setAttribute("modal-id", "edit-board-modal")
    div.innerHTML = `
              <span class="text-color text-center text-slate-500 capitalize text-2xl"><span
              class="text-3xl text-center">+</span> New Column</span>
    `
    return div
}

function renderCards(where, whatList) {
    whatList.forEach(card => {
        const cardElement = createCardElement(card.id, card.title, card.tasks, card.tasks.length);
        where.appendChild(cardElement);
    });
    document.querySelector("#playGround").effectAllowed = "move"
    document.querySelectorAll(".card").forEach(el => {
        addEventsDragAndDrop(el)
    })
    cardJS()
}

function renderColumns(where, whatList, newColumnElement) {
    whatList.forEach(column => {
        const columnElement = createColumnElement(column.id, column.name, column.cards.length, "text-slate-500");
        where.insertBefore(columnElement, newColumnElement);
        renderCards(document.querySelector(`#${column.id}`), column.cards)
    });
}

function renderBoard(where, whatList) {
    whatList.forEach(board => {
        const boardElement = createBoardElement(board.id, board.name, false)
        where.appendChild(boardElement)
    })
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

    const boardList = document.querySelector(".board-list")
    renderBoard(document.querySelector(".board-list"), fetchData().boards)
    console.log(boardList)
    // Render cards
    // const cards = getColumnById(1, 11, fetchData()).cards

    // FIX newColumn size
    const newColumn = document.querySelector('#newColumn')
    newColumn.style.height = `${findColumnWithLargestHeight().scrollHeight - 34}px`
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


function getColumnWithMostChildNodes(columns) {
    let maxColumn;
    let maxChildNodes = 0;

    columns.forEach(column => {
        const numberOfChildNodes = column.querySelectorAll(".card").length;
        if (numberOfChildNodes > maxChildNodes) {
            maxChildNodes = numberOfChildNodes;
            maxColumn = column;
        }
    });
    return maxColumn;
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
        selectedBoard = boardItem.getAttribute("id")
        const columns = document.querySelectorAll(".column")
        columns.forEach(col => {
            col.remove()
        })
        renderColumns(playGround, getBoardById(selectedBoard, fetchData()).columns, document.querySelector("#newColumn"))


        const newColumn = document.querySelector('#newColumn')
        newColumn.style.height = `${findColumnWithLargestHeight().scrollHeight - 34}px`
        makeMouseScrollable(playGround)
        // const newColumnElement = createEmptyColumn()
        // playGround.appendChild(newColumnElement)
        boardLinks.forEach(board => {
            board.classList.remove('active')
        })
        boardItem.querySelector('button').classList.add('active')
        window.addEventListener("DOMContentLoaded", () => {
            cardJS()
        })
    })
})

function renderUI() {
    document.querySelector(".board__item").click()
}
