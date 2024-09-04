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
const form = document.getElementById("form")
const successAlert = document.getElementById("success-message")
const typeErrors = ['&nbsp;','This field is required','Please enter a valid email adress','Please enter a query type','To submit this form, please consent to being contacted']
let errors = [0,0,0,0,0,0]

function checkFirstName() {
    if(firstName.value == "") {
        statusChanger(firstName,fNameIsRequired,1,1,0)
        return
    }
    statusChanger(firstName,fNameIsRequired,0,0,0)
}

function checkLastName() {
    if(lastName.value == "") {
        statusChanger(lastName,lNameIsRequired,1,1,1)
        return
    }
    statusChanger(lastName,lNameIsRequired,0,0,1)
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
    statusChanger(email,emailIsRequired,0,0 ,2)
        return
    }
    statusChanger(email,emailIsRequired,1,2,2)
}
function checkEnquiry() {
   if(generalEnquiry.checked || supportRequest.checked) {
        statusChanger(borderGeneral,queryTypeIsRequired,0,0,3)
        statusChanger(borderSupport,queryTypeIsRequired,0,0,3)
        return;
    }
    statusChanger(borderGeneral,queryTypeIsRequired,1,3,3)
    statusChanger(borderSupport,queryTypeIsRequired,1,3,3   )
}

function checkMessage() {
if(myMessage.value != "") {
        statusChanger(myMessage,messageIsRequired,0,0,4)
        return;
    }
    statusChanger(myMessage,messageIsRequired,1,1,4)

}

function checkCheckbox() {
    if(checkBox.checked) {
        statusChanger(checkBox,chekBoxIsRequired,0,4,5)
        return
    }
    statusChanger(checkBox,chekBoxIsRequired,1,4,5)

}
function statusChanger(element,errorMessageElement,status,typeError,errorIndex) {
    if(status == 1) {
        element.classList.add('error')
        element.focus()
        errors[errorIndex] = 1
        errorMessageElement.innerHTML = typeErrors[typeError]
        return
    }
    errors[errorIndex] = 0
    element.classList.remove('error')
    errorMessageElement.innerHTML = typeErrors[0]
}

function successMessage() {
    let anyError = false;
    checkFirstName(); checkLastName();
    checkEmail(); checkEnquiry();
    checkCheckbox();checkMessage();
    console.log(errors)
    errors.forEach((thisError)=> {
        if(thisError == 1) {
            anyError = true;
            return
        }
    })
    if(anyError) {
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