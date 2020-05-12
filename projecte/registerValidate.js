const form = document.getElementById("myForm");

function validation(){
    let error_count = 0;

    form.classList.remove("is-invalid");

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let name = document.forms["myForm"]["name"];
    let lastName = document.forms["myForm"]["lastName"];
    let province =  document.forms["myForm"]["province"];

    // Determine if values have changed

    formElements = [name,lastName,email,password,confirmPassword];
    formElements.filter(e => e.value).forEach(newElement);

    if (!province.options[province.selectedIndex].defaultSelected){
        console.log("Province has changed");
        province.options[province.selectedIndex].defaultSelected = province.value;
        province.classList.remove('is-invalid');
    }


    // Determine conditions
    
    if(name.value == ""){
        name.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Your name is required";
        error_count++;
    }else if(!isNaN(name.value)){
        name.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Names can not contain numbers";
        error_count++;
    }
    
    if(lastName.value == ""){
        lastName.classList.add("is-invalid");
        document.getElementById("errorLastname").textContent = "Your last name is required";
        error_count++;
    }else if(!isNaN(lastName.value)){
        lastName.classList.add("is-invalid");
        document.getElementById("errorLastname").textContent = "Last names can not contain numbers";
        error_count++;
    }

    if (email.value == ""){        
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Email is required";
        error_count++;
    } else if (!validateEmail(email.value)) {
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Invalid email";
        error_count++;        
    }

    if(password.value == ""){
        password.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Password is required";
        error_count++;
    }else if (!validatePassword(password.value)) {
        password.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = 
            "Password must be 8 characters long, with at least one number, an uppercase and a lowercase letter";
        error_count++;        
    }

    if(confirmPassword.value == ""){
        confirmPassword.classList.add("is-invalid");
        document.getElementById("errorConfirm").textContent = "Please type your password again";
        error_count++;
    } else if (password.value != confirmPassword.value) {
        confirmPassword.classList.add("is-invalid");
        document.getElementById("errorConfirm").textContent = "Passwords must match";
        error_count++;
    }

    if(province.value == ""){
        province.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Province is required";
        error_count++;
    }
    

    if (error_count > 0) {
        return false;        
    } else {
        return true;
    }
}

function validateEmail(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validatePassword(password){
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(password) ? true : false;
}

function newElement(element) {
    if (element.value != element.defaultValue) {
        console.log(`${element} has changed`);
        element.defaultValue = element.value;
        if(element.value!=''){
            element.classList.remove('is-invalid');
        } 
    }    
}
