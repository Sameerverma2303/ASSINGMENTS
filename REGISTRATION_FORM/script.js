document.getElementById("registrationForm").addEventListener("submit", function(event){


    event.preventDefault();

   
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();

   
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let ageError = document.getElementById("ageError");

    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";

    let isValid = true;

    
    if(name === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if(email === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else{
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(!email.match(emailPattern)){
            emailError.textContent = "Enter a valid email";
            isValid = false;
        }
    }

   
    if(age === ""){
        ageError.textContent = "Age is required";
        isValid = false;
    }
    else if(age < 1 || age > 120){
        ageError.textContent = "Enter a valid age";
        isValid = false;
    }

   
    if(isValid){
        alert("Registration Successful!");

        // Optional: Clear form
        document.getElementById("registrationForm").reset();
    }

});