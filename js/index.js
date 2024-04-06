const body = document.querySelector('body');
const changeColorBtn = document.getElementById('changeColorBtn');
const colorsIndex = ['gray', 'brown', 'pink', 'goldenrod', 'darkSalmon', 'ivory', 'khaki'];

body.style.backgroundColor = 'gray';

changeColorBtn.addEventListener('click', function() {
    const colorIndex = Math.floor(Math.random() * colorsIndex.length);
    body.style.backgroundColor = colorsIndex[colorIndex];
});
