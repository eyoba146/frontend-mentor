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
const borderSupport = document.getElementById("border-support")
const borderGeneral = document.getElementById("border-general")
const messageIsRequired = document.getElementById("message-is-required")
const checkBox = document.getElementById("checkbox")
const chekBoxIsRequired = document.getElementById("checkbox-is-required")
const submitBtn =document.getElementById("submit")
const borderColor = "1px solid hsl(0, 66%, 54%)"
const normalBorder = "1px solid hsl(186, 15%, 59%)"
var errors = [0,0,0,0,0,0]
function checkFirstName() {
    if(firstName.value == "") {
        firstName.style.border = borderColor
        fNameIsRequired.style.display = "block"
        errors[0] = 1
    }else {
        errors[0] = 0;
        firstName.style.border = normalBorder
        fNameIsRequired.style.display = "none"
    }
}

function checkLastName() {
    if(lastName.value == "") {
        lastName.style.border = borderColor
        lNameIsRequired.style.display = "block"
        errors[1] = 1
    }else {
        errors[1] = 0
        lastName.style.border = normalBorder
        lNameIsRequired.style.display = "none"
    }
}

function checkEmail() {
    let isValid;
    for(let i = 0; i < email.value.length; i++) {
        console.log()
        if(email.value[i] == "@") {
            isValid = true;
        }
    }
    if(email.value == "") {
        email.style.border = borderColor
        emailIsRequired.style.display = "block"
        errors[2] = 1
    }else if(!isValid) {
        errors[2] = 1
        email.style.border = borderColor
        emailIsRequired.style.display = "block"
    }else {
        errors[2] = 0
        email.style.border = normalBorder
        emailIsRequired.style.display = "none"
    }
}

function checkEnquiry() {
    if(!(generalEnquiry.checked || supportRequest.checked)) {
        queryTypeIsRequired.style.display = "block"
        errors[3] = 1
    }else {
        errors[3] = 0
        queryTypeIsRequired.style.display = "none"
    }
}

function checkMessage() {
    if(myMessage.value == "") {
        myMessage.style.border = borderColor
        messageIsRequired.style.display = "block"
        errors[4] = 1
    }else {
        errors[4] = 0
        myMessage.style.border = normalBorder
        messageIsRequired.style.display = "none"
    }
}

function checkCheckbox() {
    if(!checkBox.checked) {
        chekBoxIsRequired.style.display = "block"
        errors[5] = 1
    }else {
        errors[5] = 0
        chekBoxIsRequired.style.display = "none"

    }
}

function successMessage() {
    let noError = true;
    checkFirstName(); checkLastName();
    checkEmail(); checkEnquiry();
    checkCheckbox();checkMessage();
    for(let i = 0; i < errors.length; i++) {
        if(errors[i] == 1) {
            noError = false
        }
    }
    if(noError) {
        alert("success")
    }
}

submitBtn.addEventListener("click",successMessage)
generalEnquiry.addEventListener("click",()=>{
    borderGeneral.style.background = "hsl(148, 38%, 91%)"
    borderSupport.style.background = "hsl(0, 0%, 100%)"
    borderGeneral.style.border = "1px solid hsl(169, 82%, 27%)"
    borderSupport.style.border = normalBorder;
})
supportRequest.addEventListener("click",()=> {
    borderSupport.style.background = "hsl(148, 38%, 91%)"
    borderGeneral.style.background = "hsl(0, 0%, 100%)"
    borderSupport.style.border = "1px solid hsl(169, 82%, 27%)"
    borderGeneral.style.border = normalBorder;
})
