const form = document.getElementById("myForm");

function validation(){
    let error_count = 0;

    form.classList.remove("is-invalid");

    let email = document.forms["myForm"]["email"];
    let password = document.forms["myForm"]["password"];

      
    if (email.value == ""){        
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Email is required";
        error_count++;
    } else if (!validateEmail(email.value)) {
        email.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Invalid email"
        error_count++;        
    }

    if(password.value == ""){
        password.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Password is required"
        error_count++;
    }

    if (error_count > 0) {
        return false;        
    } else {
        return true;
    }
}

function validateEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}