   
module.exports={   
   // Javascript By Adriendums on Mar 26 2020
   validateEmail: (email) =>{
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
            return true; 
        } else {
            return false; 
        }
    }
}