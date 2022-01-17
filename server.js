
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

regEvent1= [];


// Javascript By Adriendums on Mar 26 2020
function validateEmail (email){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        return true; 
    } else {
        return false; 
    }
}
//

function registerForEvent(array, email){
    let isValidEmail = validateEmail(email)
    isValidEmail=true
    if (isValidEmail){
        if(array.includes(email)){
            return res.status(400).send("You have already registered for this event.")
            }else{
               array.push(email)
                console.log(`Array after addition of ${email}: ` + array)
                return res.status(200).send("You have been successfully registered for the event.")
            }
    }else{
        return res.status(400).send("Please enter a valid e-mail address to continue.")
        }
}

function cancelReg(array,email){
        isValidEmail = validateEmail(email)

        if(isValidEmail){
            if(array.indexOf(email)>=0){
                array.splice(array.indexOf(email),1)
                console.log("Array after cancellation: " + array)
                return res.status(400).send("You have been successfully cancelled your registration for this event.")
            }
            else{
                return res.status(200).send("You are not registered for this event.")
             }
        }
        else{
            return res.status(400).send("Please enter a valid e-mail address to continue.")
        }
}
    


app.post('/api/emailEvent1', (req, res)=>{
// console.log(req.body)
    const {regEmailEvent1} = req.body
    console.log(`emailEvent1 app.post: ${regEmailEvent1}`)
    
    // Javascript By Adriendums on Mar 26 2020
    function validateEmail (email){
    // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (email.match(regexEmail)) {
        return true; 
    } else {
        return false; 
    }
    }//


    function registerForEvent(array, email){
        isValidEmail = validateEmail(email)

        if (isValidEmail){
            if(array.includes(email)){
                return res.status(400).send("You have already registered for this event.")
                }else{
                    array.push(email)
                    console.log(`Array after addition of ${email}: ` + array)
                    return res.status(200).send("You have been successfully registered for the event.")
                }
        }else{
            return res.status(400).send("Please enter a valid e-mail address to continue.")
            }
    }

    registerForEvent(regEvent1, regEmailEvent1)
})

app.delete('/api/emailEvent1', (req, res)=>{
    const {canEmailEvent1} = req.body

    // Javascript By Adriendums on Mar 26 2020
    function validateEmail (email){
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(regexEmail)) {
            return true; 
        } else {
            return false; 
        }
    }   //

    function cancelReg(array,email){
        isValidEmail = validateEmail(email)

        if(isValidEmail){
            if(array.indexOf(email)>=0){
                array.splice(array.indexOf(email),1)
                console.log("Array after cancellation: " + array)
                return res.status(400).send("You have been successfully cancelled your registration for this event.")
            }
            else{
                return res.status(200).send("You are not registered for this event.")
            }
        }
        else{
            return res.status(400).send("Please enter a valid e-mail address to continue.")
        }
    }
    cancelReg(regEvent1, canEmailEvent1)
})

      
// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`)
})