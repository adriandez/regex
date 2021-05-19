

document.getElementById("form").addEventListener("submit", event => {

    event.preventDefault();

    let email = event.target.elements.email.value

    emailValidation(email);



})

const emailValidation = (mail) =>{
    const regEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (regEmail.test(mail)) {
        console.log("Email correct");
    } else {
        console.log("Email incorrect");
    }
}
