const blocker = document.querySelector('.blocker')
const closeModalButtons = document.querySelectorAll('.close-modal')
const toggleModalButtons = document.querySelectorAll('.toggle-modal-button')
const modals = document.querySelectorAll('.modal')
const overlay = document.querySelector('.overlay')
const createNewBoard = document.querySelector('.createNewBoard')
const createNewTask = document.querySelector('.createNewTask')

const columnInputsWrapper = document.querySelector('.column-inputs-wrapper')
const taskInputsWrapper = document.querySelector('.task-inputs-wrapper')

const addNewColumnButton = document.querySelector('.addNewColumnButton')
const addNewTaskButton = document.querySelector('.addNewTaskButton')

let modalInputs = null
let dropdownOptions = null
let errorMessage = null

// Function to find the column containing a task
function findColumnContainingTask(task) {
  for (const board of boardData.boards) {
    for (const column of board.columns) {
      if (column.tasks.includes(task)) {
        return column
      }
    }
  }
  return null
}

// Function to find the board containing a task
function findBoardContainingTask(task) {
  for (const board of boardData.boards) {
    for (const column of board.columns) {
      if (column.tasks.includes(task)) {
        return board
      }
    }
  }
  return null
}

addNewColumnButton.addEventListener('click', (e) => {
  e.preventDefault()
  addNewToInputs(columnInputsWrapper) // Add an initial empty column input
})

addNewTaskButton.addEventListener('click', (e) => {
  e.preventDefault()
  addNewToInputs(taskInputsWrapper) // Add an initial empty task input
})

function deleteInput(button) {
  const inputWrapper = button.closest('.relative')
  const inputType = inputWrapper.classList.contains('column-input')
    ? 'column'
    : 'task'

  // Your logic for deleting the input based on the type (column or task)
  if (inputType === 'column') {
    // Delete column logic
    deleteColumn(inputWrapper)
  } else {
    // Delete task logic
    deleteTask(inputWrapper)
  }

  // Optionally, update the board when an input is deleted
  renderBoard(boardData.selectedBoard)
}

function deleteInput(inputElement) {
  const inputWrapper = inputElement.parentElement
  // Check if inputWrapper has children before accessing them
  if (inputWrapper.children.length > 1) {
    inputElement.remove()
    updateModalArrays(inputWrapper)
  } else {
    console.error('Cannot delete the last input element.')
  }
}

function addNewToInputs(inputWrapper) {
  if (inputWrapper) {
    const columnInputHtml = generateInput('')
    inputWrapper.insertAdjacentHTML('beforeend', columnInputHtml)

    // Find the last added input element
    const newInput = inputWrapper.lastElementChild

    // Attach event listener to the delete button
    const deleteButton = newInput.querySelector('.close-btn')
    deleteButton.addEventListener('click', () => {
      deleteInput(newInput)
    })

    updateModalArrays(inputWrapper)
    renderBoard(boardData.selectedBoard)
  } else {
    console.error('Input wrapper is null or undefined.')
  }
}

function updateModalArrays(inputWrapper) {
  // Clear modalInputs and errorMessage arrays
  modalInputs = []
  errorMessage = []

  // Find the error messages in the new input
  const errorMessages = inputWrapper.querySelectorAll('.input-span')

  // Collect values from all input elements
  const inputElements = inputWrapper.querySelectorAll('.modal-input')
  inputElements.forEach((input, index) => {
    modalInputs.push(input.value)
    errorMessage.push(errorMessages[index]) // Add corresponding error message element
  })

  console.log(modalInputs)
}

function generateInput(input) {
  return `
    <div class="relative flex gap-4 w-full">
      <input
        class="modal-input block bg-transparent w-full px-4 py-2 rounded text-color outline-none cursor-pointer font-medium text-[13px] leading-[23px] border border-input-color focus:border-primary-color active:transition duration-200 active:ease-in"
        type="text"
        placeholder="e.g. Take coffee break"
        value="${input}"
      />
      <button
        type="button"
        class="button icon-close border-transparent bg-transparent duration-200 hover:text-danger-color close-btn"
      >
      </button>
      <span
        class="input-span hidden absolute top-2 right-12 text-[#ea5555] font-medium leading-[23px] not-italic font-plus-jakarta-sans text-[13px]"
        >Can’t be empty</span
      >
    </div>
  `
}

function openModal(modalId) {
  const modal = document.getElementById(modalId)

  // Check if modalInputs and errorMessage are already collected
  if (modalInputs || errorMessage) {
    modalInputs = Array.from(modal.querySelectorAll('.modal-input'))
    errorMessage = Array.from(modal.querySelectorAll('.input-span'))
  }

  // Extract unique status values from the selected board in the boardData object
  const statusValues = extractStatusValues(boardData, boardData.selectedBoard)

  // Populate dropdown options dynamically using the generateStatusToDropdown function
  dropdownOptions = generateDropdownOptions(statusValues)

  // Update the HTML content of the dropdown
  const dropdownElement = modal?.querySelector('.dropdown-options')

  console.log(dropdownOptions.join(''))
  if (dropdownElement) {
    dropdownElement.innerHTML = dropdownOptions.join('')
    document.querySelectorAll('.dropdown-btn').forEach(el => {
      el.addEventListener('click', () => {
        el.parentNode.querySelector('.dropdown-options').classList.toggle('hidden')
      })
    })
    document.querySelectorAll(".dropdown-option").forEach(el=>{
    const dropdownOptionsElement = el.closest(".dropdown-options")
      const temp = el
      const index = Array.from(document.querySelectorAll(".dropdown-option")).indexOf(el)
      dropdownOptionsElement.firstChild = el


    })
  }

  modal.classList.remove('hidden')
  blocker.classList.add('active')
  overlay.classList.remove('hidden')
  overlay.classList.add('flex')
  modal.style.zIndex = '100'
  console.log(boardData)
  renderBoard(boardData.selectedBoard)
}

// Function to extract unique status values from the selected board columns in the boardData object
function extractStatusValues(boardData, selectedBoard) {
  const uniqueStatusValues = new Set()

  console.log(selectedBoard)

  const board = boardData.boards[selectedBoard]
  console.log(board)
  if (board) {
    board.columns.forEach((column) => {
      uniqueStatusValues.add(column.name) // Add column name to the set
    })
  }

  return Array.from(uniqueStatusValues)
}

// Function to generate dropdown options based on status values
function generateDropdownOptions(statusValues) {
  return statusValues.map(
    (status) => `
    <li
      class="dropdown-option cursor-pointer p-3 hover:bg-content-color duration-200"
    >
      <span
        class="option-text font-medium text-[13px] leading-[23px] text-[#828FA3]"
        >${status}</span
      >
    </li>
  `,
  )
}

function generateUniqueId() {
  // Generate a random number and convert it to a hexadecimal string
  const randomPart = Math.random().toString(16).substring(2)

  // Get the current timestamp and convert it to a hexadecimal string
  const timestampPart = new Date().getTime().toString(16)

  // Combine the random and timestamp parts to create a unique ID
  const uniqueId = `${timestampPart}-${randomPart}`

  return uniqueId
}

function addNewBoard(boardName, boardColumns) {
  // Create a new board object with dynamic columns
  const newBoard = {
    id: generateUniqueId(), // Make sure to implement this function
    name: boardName,
    columns: boardColumns.map((columnName) => ({
      name: columnName,
      tasks: [],
    })),
  }

  // Add the new board to your application or perform any necessary actions
  // For example, you might have an array of boards:
  boardData.boards.push(newBoard)

  // Update your UI or trigger any necessary updates
  closeModal('add-new-board')
  renderBoard(boardData.selectedBoard) // Call renderBoard after adding a new board
}

// Assume you have a function to delete a board by ID
function deleteBoard(boardId) {
  // Implement your logic to delete the board by ID
  // For example:
  const indexToDelete = boardData.boards.findIndex(
    (board) => board.id === boardId,
  )
  if (indexToDelete !== -1) {
    boardData.boards.splice(indexToDelete, 1)
    // You might also want to handle other related data structures or UI updates here
  }

  // Update your UI or trigger any necessary updates
  renderBoard(boardData.selectedBoard) // Call renderBoard after deleting a board
}

// Example usage when deleting a board (replace 'boardIdToDelete' with the actual ID):
// deleteBoard('boardIdToDelete');

createNewBoard.addEventListener('click', (e) => {
  e.preventDefault()

  // Update modalInputs with the latest values
  modalInputs = Array.from(columnInputsWrapper.querySelectorAll('.modal-input'))
  errorMessage = Array.from(columnInputsWrapper.querySelectorAll('.input-span'))
  let hasError = false // Flag to track if there is any error

  // Validate boardName (assuming it is the first input element)
  const boardNameInput = modalInputs[0]
  const boardNameErrorMessage = errorMessage[0]

  if (boardNameInput.value === '') {
    boardNameInput.classList.add('error')
    boardNameErrorMessage.classList.remove('hidden')
    hasError = true // Set the flag to true if there is an error
  } else {
    boardNameInput.classList.remove('error')
    boardNameErrorMessage.classList.add('hidden')
  }

  // Validate column names
  for (let index = 1; index < modalInputs.length; index++) {
    const modalInput = modalInputs[index]
    const currentErrorMessage = errorMessage[index]

    if (modalInput.value === '') {
      modalInput.classList.add('error')
      currentErrorMessage.classList.remove('hidden')
      hasError = true // Set the flag to true if there is an error
    } else {
      modalInput.classList.remove('error')
      currentErrorMessage.classList.add('hidden')
    }
  }

  if (!hasError) {
    // Call the addNewBoard function with the board name and column names
    addNewBoard(
      boardNameInput.value,
      modalInputs.slice(1).map((input) => input.value),
    )

    // Reset modalInputs and errorMessage
    modalInputs = errorMessage = null

    renderBoard(boardData.selectedBoard)
    // Close the modal
    closeModal('add-board-modal')
  }
})

// closeModal function to close modals
const closeModal = (modalId) => {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.add('hidden')
    blocker.classList.remove('active')
    overlay.classList.add('hidden')
    modal.style.zIndex = '0'
    overlay.classList.remove('flex')
  }

  // Reset modalInputs and errorMessage
  modalInputs = null
  errorMessage = null
}

toggleModalButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const modalId = button.getAttribute('modal-id')
    console.log(modalId)
    openModal(modalId, boardData.selectedBoard)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.parentElement.parentElement.id
    closeModal(modalId)
  })
})

blocker.addEventListener('click', () => {
  modals.forEach((modal) => {
    modal.classList.add('hidden')
  })
  blocker.classList.add('hidden')
  overlay.classList.add('hidden')
  overlay.classList.remove('flex')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach((modal) => {
      modal.classList.add('hidden')
      modal.style.zIndex = '0'
    })
    blocker.classList.remove('active')
    overlay.classList.add('hidden')
    overlay.classList.remove('flex')
  }
})

let hasError = false

createNewTask.addEventListener('click', (e) => {
  e.preventDefault()

  const modalInputs = Array.from(
    taskInputsWrapper.querySelectorAll('.modal-input'),
  )
  const errorMessage = Array.from(
    taskInputsWrapper.querySelectorAll('.input-span'),
  )

  let hasError = false

  // Validate task name input
  const taskNameInput = modalInputs[0]
  const taskNameErrorMessage = errorMessage[0]

  if (taskNameInput.value === '') {
    taskNameInput.classList.add('error')
    taskNameErrorMessage.classList.remove('hidden')
    hasError = true
  } else {
    taskNameInput.classList.remove('error')
    taskNameErrorMessage.classList.add('hidden')
  }

  // Validate other inputs if needed
  for (let index = 1; index < modalInputs.length; index++) {
    const modalInput = modalInputs[index]
    const currentErrorMessage = errorMessage[index]

    if (modalInput.value === '') {
      modalInput.classList.add('error')
      currentErrorMessage?.classList.remove('hidden')
      hasError = true // Set the flag to true if there is an error
    } else {
      modalInput.classList.remove('error')
      currentErrorMessage?.classList.add('hidden')
    }
  }

  // Capture the selected status from dropdown options with class '.dBtn-text'
  console.log(boardData)
  const boardIndex = boardData.boards.findIndex(
    (board) => board.id === boardData.selectedBoard,
  )
  console.log(boardIndex)

  const dropdownOptions = boardData.boards[boardIndex].columns.map(
    (column) => column.name,
  )

  console.log(dropdownOptions)

  if (!hasError) {
    // Use the selected status from the dropdown
    const selectedStatusText = dropdownOptions[0]

    // Call your addNewTask function with the collected data
    addNewTask(
      taskNameInput.value,
      modalInputs[1].value, // Assuming the second input is the task description
      modalInputs.slice(2).map((input) => input.value), // Assuming the rest are subtasks
      selectedStatusText,
    )

    // Clear modalInputs and errorMessage arrays
    modalInputs.forEach((input) => (input.value = ''))
    errorMessage.forEach((errorSpan) => errorSpan.classList.add('hidden'))

    closeModal('add-task-modal')
  }
})

function addNewTask(taskName, taskDescription, taskSubtasks, status) {

  const newTask = {
    id: generateUniqueId(),
    title: taskName,
    description: taskDescription,
    status: status,
    subtasks: taskSubtasks.map((subtask) => ({
      title: subtask,
      isCompleted: false,
    })),
  }

  boardData.selectedColumn.tasks.push(newTask)

  document.querySelectorAll('.column')[select]

  renderBoard(boardData.selectedBoard)
}
