function validar(){
    var firstName = document.forms["RegForm"]["FirstName"];
    var lastName = document.forms["RegForm"]["LastName"];
    var email = document.forms["RegForm"]["Email"];
    var number = document.forms["RegForm"]["Number"];
    var gender = document.forms["RegForm"]["Gender"];
    var country = document.forms["RegForm"]["Country"];
    var accept = document.forms["RegForm"]["Accept"];

    if(firstName.value == ""){
        alert("Please enter your first name");
        firstName.focus();
        return false;
    } 

    if(lastName.value == ""){
        alert("Please enter your last name");
        lastName.focus();
        return false;
    } 

    if(email.value == ""){
        alert("Please enter your email");
        lastName.focus();
    }else{
        var regemail = '/^\S+@\S+\.\+$';
            if(regemail(email.value) === false){
                alert("Email errado", "please enter a valid email");
            }else{
                return false;

            }

    }

    if(number.value == ""){
        alert("Please enter your number");
        lastName.focus();
        var numero = "";
        if(numero == "999999999"){

        }else{
            var regnum = lksdjflañkj;
            alert("numero errado","please enter your number")
            
            }
        
        return false;
    } 

    return true;
}
