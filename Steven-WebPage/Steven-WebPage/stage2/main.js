function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function changeHeading() {
    var element = document.getElementById("heading");
    var content = document.getElementById("nameInput");
    element.innerHTML = content.value;
}