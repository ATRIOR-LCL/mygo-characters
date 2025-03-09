const useRem = ()=> {
    let w = document.documentElement.clientWidth;
    let size = w / 10 + 'px'
    document.documentElement.style.fontSize = size;
}

window.addEventListener('DOMContentLoaded', useRem);
window.addEventListener('resize', useRem);