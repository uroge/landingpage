const howWeWork = document.querySelectorAll('#we-are-different-col');
const hwwTitle = document.querySelector('.how-we-work-h');
const underline = document.querySelector('.underline-how-we-work');

howWeWork.forEach(el => {
    if(window.innerWidth < 980) {
        el.classList.add('text-center');
        el.classList.remove('text-left');
    }
});

if(window.innerWidth < 980) {
    hwwTitle.classList.add('mx-auto');
    underline.classList.add('mx-auto');
}