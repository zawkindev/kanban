let dragSrcEl;
let dragging = false
let isDragging = false;
let startPosition = {x: 0, y: 0};
let scrollLeft = 0;
let scrollTop = 0;
let last = document.querySelectorAll('.dragover')[0]
let draggingColumn;


function isBefore(el1, el2) {
    let cur
    if (el2.parentNode === el1.parentNode) {
        for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
            if (cur === el2) return true
        }
    }
    return false;
}

makeMouseScrollable(playGround)
while (dragging) {
    isDragging = false
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    scrollTop = 0;
    stopMouseScrolling(playGround)
}
playGround.effectAllowed = "move"


function drag() {
    dragging = true;

    isDragging = false
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    scrollTop = 0;
    stopMouseScrolling()


    return false
}

function dragStart(e) {
    dragging = true
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData('text/plain', null)
    dragSrcEl = e.target;
    dragSrcEl.opacity = 0.5;
    // dragSrcEl.classList.add('dragover')
    // e.dataTransfer.setData("text/html", this.innerHTML);
    e.dataTransfer.setData("taskId", this.id);
    e.dataTransfer.setData("classList", this.classList);

    isDragging = false
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    scrollTop = 0;
    stopMouseScrolling(playGround)
    return false;
}

function dragEnter(e) {
}

function dragOver(e) {
    dragging = true;
    draggingColumn = this.closest(".column");
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    last = document.querySelectorAll('.dragover')[0];

    if (last === undefined) {
        this.classList.add("dragover");
    } else {
        last.classList.remove("dragover");
        this.classList.add("dragover");
        last = this;
    }

    if (dragSrcEl !== this && !this.contains(dragSrcEl)) {

        if (isBefore(dragSrcEl, this)) {
            draggingColumn.insertBefore(dragSrcEl, this);
        } else {
            draggingColumn.insertBefore(dragSrcEl, this.nextElementSibling);
        }
    }

    isDragging = false;
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    scrollTop = 0;
    stopMouseScrolling(playGround);
    return false;
}

function dragLeave(e) {
    dragging = true
    e.preventDefault();
    if (this.classList.contains('dragover') && this !== last) {
        this.classList.remove('dragover')
    }

    isDragging = false
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    scrollTop = 0;
    stopMouseScrolling(playGround)
    return false;
}

function dragDrop(e) {
    this.classList.remove("dragover")
    dragging = false
    makeMouseScrollable(playGround)
    return false;
}

function dragEnd() {
    isDragging = false
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    scrollTop = 0;
    stopMouseScrolling(playGround)
    dragging = true
    return false;
}

function mouseDown() {
    dragging = true
    isDragging = false
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    scrollTop = 0;
    stopMouseScrolling(playGround)
    return false
}

function mouseUp() {

    isDragging = false
    startPosition = {x: 0, y: 0};
    scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
    return false
}

function dragLeaveColumn(e) {
    dragSrcEl.classList.add("cardAnime")
    return false
}

function dragOverColumn(e) {
    if (!this.querySelector('.card')) {
        this.appendChild(dragSrcEl)
    }
    return false
}

function addEventsDragAndDrop(el) {
    el.addEventListener("dragstart", dragStart, false);
    el.addEventListener("dragover", dragOver, false);
    el.addEventListener("dragleave", dragLeave, false);
    el.addEventListener("dragenter", dragEnter, false);
    el.addEventListener("drop", dragDrop, false);
    el.addEventListener("dragend", dragEnd, false);
    el.addEventListener("mousedown", mouseDown, false)
    el.addEventListener("mouseup", mouseUp, false)
}

const columnss = document.querySelectorAll(".column")
columnss.forEach(col => {
    col.addEventListener("dragover", dragOverColumn, false)
    col.addEventListener("dragleave", dragLeaveColumn, false)
})
// make images Draggable <END>

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.draggable = true;
    addEventsDragAndDrop(card);
});


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
