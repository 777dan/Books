let titles = document.getElementsByClassName("title");
for (let i = 0; i < titles.length; i++) {
    titles[i].onclick = showBook;
}

function showBook(event) {
    let title = event.target;
    title.style.color = "red";
    let toShow = title.nextElementSibling;
    if (toShow.classList.contains("open")) {
        //toShow.classList...
    }
    else {
        //toShow.classList...
    }
}