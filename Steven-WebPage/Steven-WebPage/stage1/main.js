function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function changeHeading() {
    var element = document.getElementById("heading");
    var content = document.getElementById("nameInput")
    element.innerHTML = content.value;
}

function changeImage(number, url) {
    var img = document.getElementById("displayed-img");
    var text = document.getElementById("displayed-text");
    if (number === 0) {
        img.src = url
        text.innerHTML = "Pardalote by firOOO2(CC-by-NC)";
    } else if (number === 1) {
        img.src = url
        text.innerHTML = "Purple swamp hen by Toby Hudson(CC-By-SA)";
    } else if (number === 2) {
        img.src = url
        text.innerHTML = "White-headed Stilt by JJ Harrison(CC-by-SA)";
    } else if (number === 3) {
        img.src = url
        text.innerHTML = "Inland Thornbill by Peter Jacobs(CC-by-SA)";
    } else if (number === 4) {
        img.src = url
        text.innerHTML = "Rose Robin by JJ Harrison(CC-by-SA)";
    };
}