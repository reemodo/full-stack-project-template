const TransportationIcons = { "Bus": "fa-bus", "Car": "fa-car" }
const PreferredGenderText = { "f": "Female", "m": "Male", "un": "No Preferred Gender" }
function changeText() {
    const outputElement = $("#picked");
    const to = $("#toSchool");
    if (to.is(":checked")) {
        outputElement.text("To");
    } else {
        outputElement.text("From");
    }
}

function changeTextFilter() {
    const outputElement = $("#pickedFilter");
    const to = $("#toSchoolFilter");
    if (to.is(":checked")) {
        outputElement.text("To");
    } else {
        outputElement.text("From");
    }
}


const USER_ID = localStorage.id 

const SUCCESS = "Your Activity was added, you can see it in My Activities page"
function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}
let mybutton = $("#btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.css("display", "block");
    } else {
        mybutton.css("display", "none");
    }
}
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





