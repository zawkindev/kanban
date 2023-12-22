const initialData = {
    boards: [
        {
            id: "board-1",
            name: 'Wonderland',
            columns: [
                {
                    id: "column-11",
                    name: 'Magical Column',
                    cards: [
                        {
                            id: "card-111",
                            title: 'Enchanted Card 1',
                            tasks: [
                                { id: "task-1111", title: 'Spellbinding Task', completed: false },
                                { id: "task-1112", title: 'Mystical Task', completed: true }
                            ]
                        },
                        {
                            id: "card-112",
                            title: 'Whimsical Card 1',
                            tasks: [
                                { id: "task-1121", title: 'Fantasy Task', completed: false }
                            ]
                        },
                        {
                            id: "card-113",
                            title: 'Enchanted Card 2',
                            tasks: [
                                { id: "task-1131", title: 'Enchanting Task', completed: true }
                            ]
                        },
                        {
                            id: "card-114",
                            title: 'Whimsical Card 2',
                            tasks: [
                                { id: "task-1141", title: 'Magical Task', completed: false }
                            ]
                        },
                        {
                            id: "card-115",
                            title: 'Enchanted Card 3',
                            tasks: [
                                { id: "task-1151", title: 'Wonderful Task', completed: true }
                            ]
                        }
                    ]
                },{
                    id: "column-12",
                    name: 'Enchanted Column',
                    cards: [
                        // Cards for Enchanted Column
                        {
                            id: "card-121",
                            title: 'Enchanted Card 4',
                            tasks: [
                                { id: "task-1211", title: 'Magical Task', completed: false }
                            ]
                        },
                        {
                            id: "card-122",
                            title: 'Whimsical Card 3',
                            tasks: [
                                { id: "task-1221", title: 'Fantasy Task', completed: true }
                            ]
                        }
                    ]
                },
                {
                    id: "column-12",
                    name: 'Enchanted Column',
                    cards: [
                        // Cards for Enchanted Column
                        {
                            id: "card-121",
                            title: 'Enchanted Card 4',
                            tasks: [
                                { id: "task-1211", title: 'Magical Task', completed: false }
                            ]
                        },
                        {
                            id: "card-122",
                            title: 'Whimsical Card 3',
                            tasks: [
                                { id: "task-1221", title: 'Fantasy Task', completed: true }
                            ]
                        }
                    ]
                },
                {
                    id: "column-13",
                    name: 'Mystical Column',
                    cards: [
                        // Cards for Mystical Column
                        {
                            id: "card-131",
                            title: 'Enchanted Card 5',
                            tasks: [
                                { id: "task-1311", title: 'Enchanting Task', completed: false }
                            ]
                        },
                        {
                            id: "card-132",
                            title: 'Whimsical Card 4',
                            tasks: [
                                { id: "task-1321", title: 'Magical Task', completed: true }
                            ]
                        },
                        {
                            id: "card-133",
                            title: 'Enchanted Card 6',
                            tasks: [
                                { id: "task-1331", title: 'Wonderful Task', completed: false }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "board-2",
            name: 'Adventure Board',
            columns: [
                {
                    id: "column-21",
                    name: 'Quest Column',
                    cards: [
                        // Cards for Quest Column
                        {
                            id: "card-211",
                            title: 'Adventure Card 1',
                            tasks: [
                                { id: "task-2111", title: 'Quest Task', completed: true }
                            ]
                        },
                        {
                            id: "card-212",
                            title: 'Journey Card 1',
                            tasks: [
                                { id: "task-2121", title: 'Exploration Task', completed: false }
                            ]
                        },
                        {
                            id: "card-213",
                            title: 'Adventure Card 2',
                            tasks: [
                                { id: "task-2131", title: 'Challenging Task', completed: true }
                            ]
                        }
                    ]
                },
                {
                    id: "column-22",
                    name: 'Exploration Column',
                    cards: [
                        // Cards for Exploration Column
                        {
                            id: "card-221",
                            title: 'Journey Card 2',
                            tasks: [
                                { id: "task-2211", title: 'Discovery Task', completed: false }
                            ]
                        },
                        {
                            id: "card-222",
                            title: 'Adventure Card 3',
                            tasks: [
                                { id: "task-2221", title: 'Exciting Task', completed: true }
                            ]
                        },
                        {
                            id: "card-223",
                            title: 'Exploration Card 1',
                            tasks: [
                                { id: "task-2231", title: 'Uncharted Task', completed: false }
                            ]
                        }
                    ]
                },
                {
                    id: "column-23",
                    name: 'Challenges Column',
                    cards: [
                        // Cards for Challenges Column
                        {
                            id: "card-231",
                            title: 'Adventure Card 4',
                            tasks: [
                                { id: "task-2311", title: 'Daring Task', completed: true }
                            ]
                        },
                        {
                            id: "card-232",
                            title: 'Journey Card 3',
                            tasks: [
                                { id: "task-2321", title: 'Challenge Task', completed: false }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    selectedBoard: "board-1",
    selectedColumn: "column-11",
    selectedCard: null,
    selectedTask: null,
};
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