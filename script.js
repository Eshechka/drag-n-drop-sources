const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

function dragstart(e) {
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
};
function dragend(e) {
    e.target.classList.remove('hold', 'hide');
};

function dragenter(e) {
    e.target.classList.add('hovered');
};
function dragleave(e) {
    e.target.classList.remove('hovered');
};
function dragover(e) {
    e.preventDefault();
};
function drop(e) {
    e.target.append(item);
    e.target.classList.remove('hovered');
};


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (placehldr of placeholders) {
    placehldr.addEventListener('dragenter', dragenter);
    placehldr.addEventListener('dragover', dragover);
    placehldr.addEventListener('dragleave', dragleave);
    placehldr.addEventListener('drop', drop);
}