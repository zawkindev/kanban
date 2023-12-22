let dragSrcEl;
let dragging = false
makeMouseScrollable(playGround)
while (dragging) {
    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
}
playGround.effectAllowed = "move"


function drag() {
    dragging = true;

    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling()


    return false
}

function dragStart(e) {
    dragging = true
    dragSrcEl = this;
    dragSrcEl.opacity = 0.5;
    // dragSrcEl.classList.add('dragover')
    e.dataTransfer.setData("text/html", this.innerHTML);

    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
    return false;
}

function dragOver(e) {
    dragging = true
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    this.classList.add("dragover");

    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
    return false;
}

function dragLeave(e) {
    dragging = true
    e.preventDefault();
    this.classList.remove("dragover");

    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
    return false;
}

function dragDrop(e) {
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData("text/html");
    }

    this.classList.remove("dragover");

    dragging = false
    makeMouseScrollable(playGround)
    return false;
}

function dragEnd() {
    const listItems = document.querySelectorAll(".gallery__item");
    [].forEach.call(listItems, function (item) {
        item.draggable = "true";
    });

    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
    dragging = true
    return false;
}

function mouseDown() {
    dragging = true

    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
    return false
}

function mouseUp() {

    isDragging = false
    let startPosition = {x: 0, y: 0};
    let scrollLeft = 0;
    let scrollTop = 0;
    stopMouseScrolling(playGround)
    return false
}

function addEventsDragAndDrop(el) {
    el.addEventListener("dragstart", dragStart, false);
    el.addEventListener("dragover", dragOver, false);
    el.addEventListener("dragleave", dragLeave, false);
    el.addEventListener("drop", dragDrop, false);
    el.addEventListener("dragend", dragEnd, false);
    el.addEventListener("mousedown", mouseDown, false)
    el.addEventListener("mouseup", mouseUp, false)
}

// make images Draggable <END>

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.draggable = true;
    addEventsDragAndDrop(card);
});




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
