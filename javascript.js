// Optional JavaScript for toggling if needed
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
};
