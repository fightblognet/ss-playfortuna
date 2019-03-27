const btnShow = document.querySelector('.content__fade-out-btn');
const content = document.querySelector('.content');
const fadeOut = document.querySelector('.content__fade-out');

const showText = () => {
    content.style.height = '100%';
    content.style.marginBottom = '0';
    fadeOut.remove();
}

const showContent = btnShow.addEventListener('click', showText);

export default showContent;