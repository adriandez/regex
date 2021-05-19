document.getElementById("form").addEventListener("submit", event => {

    event.preventDefault();

    let email = event.target.elements.email.value
    let pass =event.target.elements.password.value
    let breed = event.target.elements.razaInput.value

    emailValidation(email);
    passValidation(pass)
    datalistValidation(breed)


})

const emailValidation = (mail) =>{
    const regEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (regEmail.test(mail)) {
        console.log("Email correct");
    } else {
        console.log("Email incorrect");
    }
}

const passValidation = (pass) =>{
    const regPass = /^[0-9]/;
    if(regPass.test(pass)){
        console.log("password introducido valido")
    }else 
        console.log("password introducido no valido")
}

const datalistValidation =(breed)=>{
    const regData = /human|elf|dwarf|hobbit/
    if(regData.test(breed)){
        console.log("Tu elección es correcta")
    }else
        console.log("elige una raza de la lista")

}