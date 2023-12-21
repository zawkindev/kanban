let dragSrcEl

function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move'
    dragSrcEl = this
    dragSrcEl.opacity = 0.5
    // dragSrcEl.classList.add('dragover')
    e.dataTransfer.setData('text/html', this.innerHTML)

    return false
}

function dragOver(e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    this.classList.add('dragover')

    return false
}

function dragLeave(e) {
    e.preventDefault()
    this.classList.remove('dragover')

    return false
}

function dragDrop(e) {
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML
        this.innerHTML = e.dataTransfer.getData('text/html')
    }

    this.classList.remove('dragover')

    return false
}

function dragEnd() {
    const listItems = document.querySelectorAll('.gallery__item')
    ;[].forEach.call(listItems, function (item) {
        item.draggable = 'true'
    })

    return false
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false)
    el.addEventListener('dragover', dragOver, false)
    el.addEventListener('dragleave', dragLeave, false)
    el.addEventListener('drop', dragDrop, false)
    el.addEventListener('dragend', dragEnd, false)
}

// make images Draggable <END>


const cards = document.querySelectorAll(".card")
cards.forEach(card => {
card.draggable = true
    addEventsDragAndDrop(card)
})
console.log(cards)

