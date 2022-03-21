let dropdownBtns = document.querySelectorAll('.sitenav__link');
let dropdown = document.querySelector('.dropdown-menu');
function handleClick(event) {
    dropdown.classList.toggle('hidden');
}

dropdownBtns.forEach(button => {
    button.addEventListener('click', handleClick);
})