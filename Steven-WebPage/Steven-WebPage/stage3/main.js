function toggleDarkMode() {
    const body = document.body;
    if (body.getAttribute("dark-theme") === null) {
        body.setAttribute("dark-theme", "dark");
    } else {
        body.removeAttribute("dark-theme");
    }
}

function changeHeading() {
    var element = document.getElementById("heading");
    var content = document.getElementById("nameInput");
    element.innerHTML = content.value;
}
