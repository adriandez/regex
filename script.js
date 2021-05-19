const passValidation = (pass) =>{
    const regPass = /^[0-9]/;
    if(regPass.test(pass)){
        console.log("password introducido valido")
    }else 
        console.log("password introducido no valido")
}