window.addEventListener('click', event => {
    let dot_div = document.createElement('div');
    dot_div.className = "dot_div";
    dot_div.style.left = (event.pageX - 4) + "px";
    dot_div.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot_div);
});