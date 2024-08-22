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
const form = document.getElementById("form")
const successAlert = document.getElementById("success-message")
var errors = [0,0,0,0,0,0]
function checkFirstName() {
    if(firstName.value == "") {
        firstName.style.border = borderColor
        fNameIsRequired.innerHTML = "This field is required"
        errors[0] = 1
    }else {
        errors[0] = 0;
        firstName.style.border = normalBorder
        fNameIsRequired.innerHTML = "&nbsp;"
    }
}

function checkLastName() {
    if(lastName.value == "") {
        lastName.style.border = borderColor
        lNameIsRequired.innerHTML = "This field is required"
        errors[1] = 1
    }else {
        errors[1] = 0
        lastName.style.border = normalBorder
        lNameIsRequired.innerHTML = "&nbsp;"
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
        emailIsRequired.innerHTML = "Please enter a valid email adress"
        errors[2] = 1
    }else if(!isValid) {
        errors[2] = 1
        email.style.border = borderColor
        emailIsRequired.innerHTML = "Please enter a valid email adress"
    }else {
        errors[2] = 0
        email.style.border = normalBorder
        emailIsRequired.innerHTML = "&nbsp;"
    }
}

function checkEnquiry() {
    if(!(generalEnquiry.checked || supportRequest.checked)) {
        queryTypeIsRequired.innerHTML = "Please enter a query type"
        borderGeneral.style.border = borderColor
        borderSupport.style.border = borderColor
        errors[3] = 1
    }else {
        errors[3] = 0
        queryTypeIsRequired.innerHTML = "&nbsp"
        borderGeneral.style.border = normalBorder
        borderSupport.style.border = normalBorder
    }
}

function checkMessage() {
    if(myMessage.value == "") {
        myMessage.style.border = borderColor
        messageIsRequired.innerHTML = "This field is required"
        errors[4] = 1
    }else {
        errors[4] = 0
        myMessage.style.border = normalBorder
        messageIsRequired.innerHTML = "&nbsp;"
    }
}

function checkCheckbox() {
    if(!checkBox.checked) {
        chekBoxIsRequired.innerHTML = "To submit this form, please consent to being contacted"
        errors[5] = 1
    }else {
        errors[5] = 0
        chekBoxIsRequired.innerHTML = "&nbsp;"

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
        form.scrollTo(0, 0)
        window.scrollTo(0, 0)
        document.getElementById("container").style.transform = "scale(1)"
        successAlert.style.display = "flex"
        setTimeout(() => {
            successAlert.style.display = "none"
            checkBox.checked = false;
            myMessage.value = ""
            borderSupport.style.background  = "white"
            borderGeneral.style.background  = "white"
            generalEnquiry.checked = false
            supportRequest.checked = false
            email.value = ""
            lastName.value = ""
            firstName.value = ""
        }, 4000);
        
    }else {
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