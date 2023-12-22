const initialData = {
    boards: [{
        id: 1, name: 'Platform', columns: [{
            id: 11, name: 'Column 1', cards: [{
                id: 111, title: 'Card 1', tasks: [{
                    id: 1111, title: 'task 1', completed: false
                }, {
                    id: 1112, title: 'task 2', completed: true
                }]
            }, {
                id: 112, title: 'Card 2', tasks: [{
                    id: 1121, title: 'task 1', completed: false
                }]
            }]
        }, {
            id: 12, name: 'Column 2', cards: [// Cards for Column 2
            ]
        }]
    }, {
        id: 2, name: 'Board 2', columns: [// Columns for Board 2
        ]
    }],
    selectedBoard:1,
    selectedColumn:11,
    selectedCard:null,
    selectedTask:null,
}
localStorage.setItem("taskManagement", JSON.stringify(initialData))
const database = JSON.parse(localStorage.getItem("taskManagement")) || {};

// Function to save the database to localStorage
function saveDatabase() {
    localStorage.setItem("taskManagement", JSON.stringify(database));
}

// Function to fetch data from localStorage
function fetchData() {
    return JSON.parse(localStorage.getItem("taskManagement")) || {};
}

function generateUniqueId() {
    return (Math.random() + Math.random()).toString();
}


//      GETTER

// Function to add a new board
function getBoardById(boardId, data) {
    const board = data.boards.find(board => board.id === boardId);
    return board || null; // Return the board if found, otherwise null
}

function getColumnById(boardId, columnId, data) {
    // Find the board with the specified ID
    const board = data.boards.find(board => board.id === boardId);

    // If the board is found, find the column within the board
    if (board) {
        const column = board.columns.find(column => column.id === columnId);
        return column || null; // Return the column if found, otherwise null
    }

    return null; // Return null if the board is not found
}

function getCardById(boardId, columnId, cardId, data) {
    // Find the board with the specified ID
    const board = data.boards.find(board => board.id === boardId);

    // If the board is found, find the column within the board
    if (board) {
        const column = board.columns.find(column => column.id === columnId);

        // If the column is found, find the card within the column
        if (column) {
            const card = column.cards.find(card => card.id === cardId);
            return card || null; // Return the card if found, otherwise null
        }
    }

    return null; // Return null if the board, column, or card is not found
}

function getTaskById(boardId, columnId, cardId, taskId, data) {
    // Find the board with the specified ID
    const board = data.boards.find(board => board.id === boardId);

    // If the board is found, find the column within the board
    if (board) {
        const column = board.columns.find(column => column.id === columnId);

        // If the column is found, find the card within the column
        if (column) {
            const card = column.cards.find(card => card.id === cardId);

            // If the card is found, find the task within the card
            if (card) {
                const task = card.tasks.find(task => task.id === taskId);
                return task || null; // Return the task if found, otherwise null
            }
        }
    }
    return null; // Return null if the board, column, card, or task is not found
}






//    SETTER


function addBoard(newBoard, data) {
    // Add the new board to the list of boards
    data.boards.push(newBoard);
}

function addColumnToBoard(boardId, newColumn, data) {
    // Find the board with the specified ID
    const board = data.boards.find(board => board.id === boardId);

    // If the board is found, add the new column to the board
    if (board) {
        board.columns.push(newColumn);
        return true; // Return true to indicate success
    }

    return false; // Return false to indicate failure
}


function addCardToColumn(boardId, columnId, newCard, data) {
    // Find the board with the specified ID
    const board = data.boards.find(board => board.id === boardId);

    // If the board is found, find the column within the board
    if (board) {
        const column = board.columns.find(column => column.id === columnId);

        // If the column is found, add the new card to the column
        if (column) {
            column.cards.push(newCard);
            return true; // Return true to indicate success
        }
    }

    return false; // Return false to indicate failure
}

function addTaskToCard(boardId, columnId, cardId, newTask, data) {
    // Find the board with the specified ID
    const board = data.boards.find(board => board.id === boardId);

    // If the board is found, find the column within the board
    if (board) {
        const column = board.columns.find(column => column.id === columnId);

        // If the column is found, find the card within the column
        if (column) {
            const card = column.cards.find(card => card.id === cardId);

            // If the card is found, add the new task to the card
            if (card) {
                card.tasks.push(newTask);
                return true; // Return true to indicate success
            }
        }
    }

    return false; // Return false to indicate failure
}