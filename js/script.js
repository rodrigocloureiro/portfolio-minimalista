const menu = document.querySelectorAll('.menu nav a');
menu.forEach(item => {
    item.addEventListener('click', () => {
        menu.forEach(item => item.classList.remove('selected'));
        item.classList.toggle('selected');
    });
});