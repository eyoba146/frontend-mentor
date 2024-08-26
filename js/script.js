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
const typeErrors = ['&nbsp;','This field is required','Please enter a valid email adress','Please enter a query type','To submit this form, please consent to being contacted']
var errors = [0,0,0,0,0,0]
function checkFirstName() {
    if(firstName.value != "") {
        errors[0] = 0;
        firstName.classList.remove("error")
        fNameIsRequired.innerHTML = typeErrors[0]
        return
    }
    firstName.classList.add("error")
    fNameIsRequired.innerHTML = typeErrors[1]
    firstName.focus()
    errors[0] = 1
}

function checkLastName() {
    if(lastName.value != "") {
        errors[1] = 0
        lastName.classList.remove("error")
        lNameIsRequired.innerHTML = typeErrors[0]
        return
    }
    lastName.classList.add("error")
    lNameIsRequired.innerHTML = typeErrors[1]
    lastName.focus()
    errors[1] = 1
}

function checkEmail() {
    let isValid = 0;
    let emailChars = email.value.split("")
    emailChars.forEach((email)=> {
        if(email == "@" || email == ".") {
            isValid++;
        }
    })
    if(email.value != "" && isValid == 2) {
        errors[2] = 0
        email.classList.remove("error")
        emailIsRequired.innerHTML = typeErrors[0]
        return
    }
    email.classList.add("error")
    emailIsRequired.innerHTML = typeErrors[2]
    email.focus()
    errors[2] = 1
}
function checkEnquiry() {
   if(generalEnquiry.checked || supportRequest.checked) {
        errors[3] = 0
        queryTypeIsRequired.innerHTML = typeErrors[0]
        borderGeneral.classList.remove("error")
        borderSupport.classList.remove("error")
        return;
    }
    queryTypeIsRequired.innerHTML = typeErrors[3]
    generalEnquiry.focus()
    borderGeneral.classList.add("error")
    borderSupport.classList.add("error")
    errors[3] = 1
}

function checkMessage() {
if(myMessage.value != "") {
        errors[4] = 0
        myMessage.classList.remove("error")
        messageIsRequired.innerHTML = typeErrors[0]
        return;
    }
    myMessage.classList.add("error")
    messageIsRequired.innerHTML = typeErrors[1]
    myMessage.focus()
    errors[4] = 1
}

function checkCheckbox() {
    if(checkBox.checked) {
        errors[5] = 0
        chekBoxIsRequired.innerHTML = typeErrors[0]
        return
    }
    chekBoxIsRequired.innerHTML = typeErrors[4]
    checkBox.focus()
    errors[5] = 1
}

function successMessage() {
    let noError = true;
    checkFirstName(); checkLastName();
    checkEmail(); checkEnquiry();
    checkCheckbox();checkMessage();

    errors.forEach((thisError)=> {
        if(thisError == 1) {
            noError = false;
        }
    })
    if(!noError) {
        return
    }

    form.scrollTo(0, 0)
    window.scrollTo(0, 0)
    successAlert.style.display = "flex"
    setTimeout(() => {
        successAlert.style.marginTop = "-300px"
        checkBox.checked = false;
        myMessage.value = ""
        borderSupport.classList.remove("lightgreenBg")
        borderGeneral.classList.remove("lightgreenBg")
        generalEnquiry.checked = false
        supportRequest.checked = false
        email.value = ""
        lastName.value = ""
        firstName.value = ""
        setTimeout(() => {
            successAlert.style.display = "none"
            successAlert.style.marginTop = "0px"

        }, 1500);
    }, 4000);

}


submitBtn.addEventListener("click",successMessage)
generalEnquiry.addEventListener("click",()=>{
    borderGeneral.classList.add("lightGreenBg")
    borderGeneral.classList.add("active")
    borderSupport.classList.remove("active")
    borderSupport.classList.remove("lightGreenBg")
})
supportRequest.addEventListener("click",()=> {
    borderSupport.classList.add("lightGreenBg")
    borderSupport.classList.add("active")
    borderGeneral.classList.remove("active")
    borderGeneral.classList.remove("lightGreenBg")
}) 