const val=require('./validate')

module.exports={
    // Javascript By Adriendums on Mar 26 2020
    // validateEmail: (email) =>{
    //     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (email.match(regexEmail)) {
    //         return true; 
    //     } else {
    //         return false; 
    //     }
    // },
    //

    registerForEvent:(req, res)=>{
        // const {email, array} = req.body
        // const email = req.app.get(email)
        // const array = req.app.get(array)
        console.log(req.app);
        isValidEmail = val.validateEmail(email)

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
    },

    cancelReg:(array,email)=>{
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
    
}
