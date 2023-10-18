//Displays the current image in a whole screen modal
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState == "interactive") {
        document.querySelector("body").classList.add("js");


        //This function will show more information when certain text has been clicked on.
        let featuresExpandButtons = document.querySelectorAll(".activities article .expand-button a");
        for (let button of featuresExpandButtons) {
            button.addEventListener("click", function (event) {
                this.parentElement.parentElement.classList.add("expanded");
                event.preventDefault();
            });
        }


        //If the user presses any buttons, return the text area back to normal
        const formFields = document.querySelectorAll("#form-first-name, #form-last-name, #form-phone-number, #form-email, #form-start, #form-end, #form-card-number, #form-expiration-date, #form-security-code");
        for (formField of formFields) {
            formField.addEventListener("keydown", function () {
                this.classList.remove("error");
                this.closest(".form-item").querySelector("label").classList.remove("error");
            });
        }

        
    }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var previous = window.pageYOffset;
window.onscroll = function () {
    var current = window.pageYOffset;

    //Find if the user is scrolling down or up on each scroll
    if (previous > current) {
        document.getElementById("main-menu").style.top = "0";
    } else {
        document.getElementById("main-menu").style.top = "-60px";
    }
    previous = current;
}