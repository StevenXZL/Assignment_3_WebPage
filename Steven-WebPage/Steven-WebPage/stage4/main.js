function toggleDarkMode() {
    const body = document.body;
    if (body.getAttribute("dark-theme") === null) {
        body.setAttribute("dark-theme", "dark");
    } else {
        body.removeAttribute("dark-theme");
    }
}

function changeHeading() {
    var element = document.getElementById("userName");
    queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    if (urlParams.has('user_name')) {
        element.innerHTML = urlParams.get('user_name');
    }
}