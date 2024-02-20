// phonenumber
const phoneRegex=()=>{
    const regex=/^\+(?:[0-9] ?){6,14}[0-9]$/
    const phone='+994558049820'
    return regex.test(phone) ? 'yes number' : 'no number'
}
console.log(phoneRegex());
// email
const emailRegex=()=>{
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email="sahinderisov@gmail.com"
    return regex.test(email) ? 'yes email' : 'no email'
}
console.log(emailRegex());
// password
const passwordRegex=()=>{
    const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password="Sahinderisov@12232"
    return regex.test(password) ? 'yes password' : 'no password'
}
console.log(passwordRegex());
// age
const ageRegex=()=>{
    const regex= /^[0-9]{1,2}$/;
    const age=21
    return regex.test(age) ? 'yes age' : 'no age'
}
console.log(ageRegex());
// name
const nameRegex=()=>{
    const regex= /^[A-Za-z\s]+$/;
    const name="sahin"
    return regex.test(name) ? 'yes name' : 'no name'
}
console.log(nameRegex());
