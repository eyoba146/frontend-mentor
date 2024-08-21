const firstName = document.getElementById("f-name")
const fNameIsRequired = document.getElementById("name-is-required")
const lastName = document.getElementById("l-name")
const lNameIsRequired = document.getElementById("lname-is-required")
const email = document.getElementById("email")
const emailIsRequired = document.getElementById("valid-email-is-required")
const generalEnquiry = document.getElementById("general-enquiry")
const supportRequest = document.getElementById("support-request")
const queryTypeIsRequired = document.getElementById("query-type-is-required")
const myMessage = document.getElementById("my-message")
const messageIsRequired = document.getElementById("message-is-required")
const checkBox = document.getElementById("checkbox")
const chekBoxIsRequired = document.getElementById("checkbox-is-required")
const submitBtn =document.getElementById("submit")
const borderColor = "1px solid hsl(0, 66%, 54%)"
var isAnyError = 9;
function checkFirstName() {
    if(firstName.value == "") {
        firstName.style.border = borderColor
        fNameIsRequired.style.display = "block"
    }else {
        isAnyError--;
    }
}

function checkLastName() {
    if(lastName.value == "") {
        lastName.style.border = borderColor
        lNameIsRequired.style.display = "block"
    }else {
        isAnyError--;
    }
}

function checkEmail() {
    let isValid;
    for(let i = 0; i < email.value.length; i++) {
        if(email.value[i] != "@") {
            isValid = false;
        }else {
            isValid = true
            isAnyError--
        }
    }
    if(email.value == "") {
        email.style.border = borderColor
        emailIsRequired.style.display = "block"
    }else if(!isValid) {
        email.style.border = borderColor
        emailIsRequired.style.display = "block"
    }else {
        isAnyError--
    }
}

function checkEnquiry() {
    if(!(generalEnquiry.checked || supportRequest.checked)) {
        queryTypeIsRequired.style.display = "block"
    }else {
        isAnyError--
    }
}

function checkMessage() {
    if(myMessage.value == "") {
        myMessage.style.border = borderColor
        messageIsRequired.style.display = "block"
    }else {
        isAnyError--
    }
}

function checkCheckbox() {
    if(!checkBox.checked) {
        chekBoxIsRequired.style.display = "block"
    }else {
        isAnyError--
    }
}

function successMessage() {
    checkFirstName(); checkLastName();
    checkEmail(); checkEnquiry();
    checkCheckbox();checkMessage();
    if(isAnyError <= 0) {
        alert("ahya")
    }
}

submitBtn.addEventListener("click",successMessage)
