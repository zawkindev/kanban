const database = JSON.parse(localStorage.getItem('taskManagement')) || {
    boards: [],
    columns: [],
    statusList: [],
    cards: [],
    subtasks: [],
};

// Function to save the database to localStorage
function saveDatabase() {
    localStorage.setItem('taskManagement', JSON.stringify(database));
}

function generateUniqueId() {
    return Date.now().toString();
}

// Function to add a new board
function addBoard(boardName) {
    const boardId = generateUniqueId()
    const board = {id: boardId, name: boardName, columns: []};
    database.boards.push(board);
    saveDatabase();
}

// Function to add a new column to a board
function addColumn(boardId, columnName, status) {
    const columnId = generateUniqueId();
    const column = {id: columnId, name: columnName, status: status, boardId, cards: []};
    database.columns.push(column);
    database.boards.find(board => board.id === boardId).columns.push(columnId);
    saveDatabase();
}

// Function to add a new card to a column
function addCard(columnId, cardName, currentStatus) {
    const cardId = generateUniqueId();
    const card = {id: cardId, name: cardName, columnId, currentStatus, subtasks: []};
    database.cards.push(card);
    database.columns.find(column => column.id === columnId).cards.push(cardId);
    saveDatabase();
}

// Function to add a new subtask to a card
function addSubtask(cardId, subtaskName) {
    const subtaskId = generateUniqueId();
    const subtask = {id: subtaskId, name: subtaskName, cardId};
    database.subtasks.push(subtask);
    database.cards.find(card => card.id === cardId).subtasks.push(subtaskId);
    saveDatabase();
}

// Example usage
addBoard('Platform Launch');
addColumn(1, 'To Do', "red");
addCard(1, 'Task 1', 'In Progress');
addSubtask(1, 'Subtask 1');