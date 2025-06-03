function changeTheme() {
    let body = document.querySelector("body");

    // body.classlist.toggle("dark");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    } else {
        body.classList.add("dark");
    }
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function bookUs() {
    let name = prompt("What is your name?");
    let city = prompt("What is your email address?");
    if (name.length && city.length) {
        alert(
            "Hello " +
            name +
            "! We'll be in touch with more details. Feel free to contact us at pearlonyii@gmail.com, if you have further questions. Thank You 😊."
        );
    } else {
        alert(
            "Please fill out the required information to book a session. Thank You! 😊"
        );
    }
}
let bookButton = document.querySelector(".book-yoga");
bookButton.addEventListener("click", bookUs);