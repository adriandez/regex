document.getElementById("form").addEventListener("submit", event => {

    event.preventDefault();

    let email = event.target.elements.email.value
    let pass =event.target.elements.password.value
    let breed = event.target.elements.razaInput.value

    checkEmail(email);
    checkPassword(pass)
    checkRace(breed)


})

const checkEmail = (mail) =>{
    const regEmail = new RegExp(/^([a-zA-Z0-9]+)([@])([a-zA-Z0-9]+)([.])([a-z]{2,4})/)
    if (regEmail.test(mail)) {
        console.log("Email correct");
    } else {
        console.log("Email incorrect");
    }
}

const checkPassword = (pass) =>{
    const regPass = /(^[a-zA-Z0-9]+)[\w~@#$%]{6,20}[^ \.\,\-]*$/;
    if(regPass.test(pass)){
        console.log("password introducido valido")
    }else 
        console.log("password introducido no valido")
}

const checkRace =(raceOrNot)=>{
    const regData = /^human$|^elf$|^dwarf$|^hobbit$/
    if(regData.test(raceOrNot)){
        console.log("Tu elección es correcta")
    }else
        console.log("elige una raza de la lista")

}