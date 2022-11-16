function toggleDarkMode() {
    const body = document.body;
    if (body.getAttribute("dark-theme") === null) {
        body.setAttribute("dark-theme", "dark");
        // Store color preference in local storage
        localStorage.setItem("dark-theme", "dark");
    } else {
        body.removeAttribute("dark-theme");
        // Remove preference from local storage
        localStorage.removeItem("dark-theme");
    }

}

function changeHeading() {
    var element = document.getElementById("userName");
    queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    if (urlParams.has('user_name')) {
        element.innerHTML = urlParams.get('user_name');
    }
    // Store user name in local storage
    localStorage.setItem("user_name", urlParams.get('user_name'));
}

function restore() {
    // Restore colro preference from local storage
    const darkMode = localStorage.getItem("dark-theme");
    if (darkMode !== null) {
        document.body.setAttribute("dark-theme", "dark");
    };

    queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    if (urlParams.has('user_name') !== false) {
        document.getElementById("userName").innerHTML = localStorage.getItem("user_name");
    }
}