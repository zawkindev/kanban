// Function to generate a unique timestamp-based ID
function generateUniqueId() {
    return Date.now().toString();
}

// Function to fetch data from localStorage
function fetchData() {
    return JSON.parse(localStorage.getItem('taskManagement')) || {};
}

// Function to render the data for a specific column
function renderColumn(columnId) {
    const data = fetchData();
    const column = data.columns.find(c => c.id === columnId);
    const columnElement = document.createElement('div');
    columnElement.innerHTML = `<h3>${column.name}</h3>`;

    column.cards.forEach(cardId => {
        const card = data.cards.find(c => c.id === cardId);
        const cardElement = document.createElement('div');
        cardElement.innerHTML = `<p>${card.name} - Status: ${card.currentStatus}</p>`;

        card.subtasks.forEach(subtaskId => {
            const subtask = data.subtasks.find(s => s.id === subtaskId);
            const subtaskElement = document.createElement('div');
            subtaskElement.innerHTML = `<p>${subtask.name}</p>`;
            cardElement.appendChild(subtaskElement);
        });

        columnElement.appendChild(cardElement);
    });

    return columnElement;
}

// Function to render the data for all columns in a board
function renderBoard(boardId) {
    const data = fetchData();
    const board = data.boards.find(b => b.id === boardId);
    const appElement = document.getElementById('app');

    // Clear the existing content in the appElement
    appElement.innerHTML = `<h2>${board.name}</h2>`;

    board.columns.forEach(columnId => {
        const columnElement = renderColumn(columnId);
        appElement.appendChild(columnElement);
    });
}

// Example: Add a new card to a column and render only that column
function addCardToColumn(columnId, cardName, currentStatus) {
    const data = fetchData();
    const cardId = generateUniqueId();
    const card = { id: cardId, name: cardName, columnId, currentStatus, subtasks: [] };
    data.cards.push(card);
    data.columns.find(column => column.id === columnId).cards.push(cardId);
    saveDatabase();

    // Render only the specific column after adding the card
    const columnElement = renderColumn(columnId);
    const appElement = document.getElementById('app');
    appElement.appendChild(columnElement);
}

// Function to save the database to localStorage
function saveDatabase() {
    localStorage.setItem('taskManagement', JSON.stringify(fetchData()));
}

// Example: Add a new card to a column with a specified status
addCardToColumn(1, 'New Task', 'In Progress');