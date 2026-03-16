// document.getElementById('customForm').addEventListener('submit', function(event) {
function formsubmit()  {  
let form = this;
    
    function clearOtherErrors(fields) {
      fields.forEach(f => {
        if (f && f.classList) {
          f.classList.remove('is-invalid');
        }
      });  

    }
    
    // Firstname validation starts from here

    let nameInputf = form.firstName;
    let nameErrorf = document.getElementById('nameErrorf');
    let allFields = [form.lastName, form.email, form.password, form.repassword, form.gender, form.dob, form.mobile, form.address1, form.address2, form.city, form.country, form.pincode,form.skill];
    if (!nameInputf.value.trim()) {
      nameInputf.classList.add('is-invalid');
      nameErrorf.textContent = 'Please enter your name ';
      clearOtherErrors(allFields);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      return;
    }
     else if (/\d/.test(nameInputf.value)) {
      nameInputf.classList.add('is-invalid');
      nameErrorf.textContent = 'Name should not contain numbers';
      clearOtherErrors(allFields);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      
      return;
    }
     else if (/[!@#$%^&*().]/.test(nameInputf.value)) {
      nameInputf.classList.add('is-invalid');
      nameErrorf.textContent = 'Name should not contain special characters';
      clearOtherErrors(allFields);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
      return;
    }
     else if (nameInputf.value.length < 4) {
      nameInputf.classList.add('is-invalid');
      nameErrorf.textContent = 'Name must be at least 4 characters long';
      clearOtherErrors(allFields);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
      return;
    } 
    else if (nameInputf.value.charAt(0) !== nameInputf.value.charAt(0).toUpperCase()) {
      nameInputf.classList.add('is-invalid');
      nameErrorf.textContent = 'Name must start with a capital letter';
      clearOtherErrors(allFields);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
      return;
    } 
    else {
      nameInputf.classList.remove('is-invalid');
      nameInputf.classList.add('is-valid');
      nameErrorf.textContent = '';
    }
    
    // firstname validation ends here


    // lastname validation starts from here
    let nameInputl = form.lastName;
    let nameErrorl = document.getElementById('nameErrorl');
    if (!nameInputl.value.trim()) {
      nameInputl.classList.add('is-invalid');
      nameErrorl.textContent = 'Please enter your name ';
      clearOtherErrors([nameInputf, form.mobile, form.password, form.repassword, form.gender, form.dob, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none'; 
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
    } 
    else if (/\d/.test(nameInputl.value)) {
      nameInputl.classList.add('is-invalid');
      nameErrorl.textContent = 'Name should not contain numbers';
      clearOtherErrors([nameInputf,form.mobile, form.password, form.repassword, form.gender, form.dob, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none'; 
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
    }
     else if (/[!@#$%^&*().]/.test(nameInputl.value)) {
      nameInputl.classList.add('is-invalid');
      nameErrorl.textContent = 'Name should not contain special characters';
      clearOtherErrors([nameInputf,form.mobile, form.password, form.repassword, form.gender, form.dob,form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none'; 
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
    }
     else if (nameInputl.value.length < 3) {
      nameInputl.classList.add('is-invalid');
      nameErrorl.textContent = 'Name must be at least 3 characters long';
       clearOtherErrors([nameInputf,form.mobile, form.password, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
       let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
       //event.preventDefault();
        return;
    } 
    else if (nameInputl.value.charAt(0) !== nameInputl.value.charAt(0).toUpperCase()) {
      nameInputl.classList.add('is-invalid');
      nameErrorl.textContent = 'Name must start with a capital letter';
      clearOtherErrors([nameInputf, form.mobile, form.password, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
      let genderError = document.getElementById('genderError');
       genderError.style.display = 'none'; 
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
    } 
    else {
      nameInputl.classList.remove('is-invalid');
      nameInputl.classList.add('is-valid');
      nameErrorl.textContent = '';
    }
    
    // lastname validation ends here

     
      // mobile validation starts here

      let mobileInput = form.mobile;
      let mobileError = document.querySelector('#mobile + .invalid-feedback');
      let mobilePattern = /^[0-9]{10}$/;
      let firstDigitPattern = /^[6-9]/;
      if (!mobileInput.value.match(mobilePattern)) {
        mobileInput.classList.add('is-invalid');
        mobileError.textContent = 'Please enter a valid 10 digit mobile number';
        clearOtherErrors([nameInputf, nameInputl, form.email, form.password, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
       //event.preventDefault();
        return;
      } 
      else if (mobileInput.value.length !== 10) {
        mobileInput.classList.add('is-invalid');
        mobileError.textContent = 'Mobile number must be 10 digits long';
        clearOtherErrors([nameInputf,nameInputl, form.email, form.password, form.repassword, form.gender, form.dob, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
      }
       else if (!firstDigitPattern.test(mobileInput.value)) {
        mobileInput.classList.add('is-invalid');
        mobileError.textContent = 'invalid input';
         clearOtherErrors([nameInputf,nameInputl, form.email, form.password, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
       //event.preventDefault();
        return;
      } 
      else {
        mobileInput.classList.remove('is-invalid');
        mobileInput.classList.add('is-valid');
        mobileError.textContent = '';
      }

      // mobile validation ends here


      // Email validation starts from here
      let emailInput = form.email;
      let emailValue = emailInput.value.trim();
      let emailPattern = /^[^\s@]+@[a-z]+\.(com|in)$/;
      if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('is-invalid');
        clearOtherErrors([nameInputf, nameInputl, mobileInput,form.password, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
      }
       else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      }
      // Email validation ends here 


      // Password validation starts here
      let passwordInput = form.password;
      let repasswordInput = form.repassword;
      let passwordError = document.getElementById('passwordError');
      let repasswordError = document.getElementById('repasswordError');
      if (!passwordInput.value) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Please enter your password';
         clearOtherErrors([nameInputf, nameInputl, mobileInput, emailInput, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
        let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
      }
       else if (passwordInput.value.length < 8) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must be at least 8 characters long';
         clearOtherErrors([nameInputf, nameInputl,mobileInput, emailInput, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
       let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
      } 
      else if (passwordInput.value.charAt(0)!==passwordInput.value.charAt(0).toUpperCase()){
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password  first letter must be uppercase ';
        clearOtherErrors([nameInputf, nameInputl, mobileInput, emailInput, form.repassword, form.gender, form.dob, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
      }
       else if (!/[a-z]/.test(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must contain at least one lowercase letter';
        clearOtherErrors([nameInputf, nameInputl, mobileInput, emailInput, form.repassword, form.gender, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
        let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none'; 
      // event.preventDefault();
        return;
      }
       else if (!/[0-9]/.test(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must contain at least one digit';
        clearOtherErrors([nameInputf, nameInputl, mobileInput,emailInput, form.repassword, form.gender, form.dob, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
      }
       else if (!/[!@#&$*]/.test(passwordInput.value)) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Password must contain at least one special character';
        clearOtherErrors([nameInputf, nameInputl, mobileInput,emailInput, form.repassword, form.gender, form.dob, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
       let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
      // event.preventDefault();
        return;
      }
      else {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        passwordError.textContent = '';
      }
      if (repasswordInput.value !== passwordInput.value) {
        repasswordInput.classList.add('is-invalid');
        repasswordError.textContent = 'Passwords do not match';
        clearOtherErrors([nameInputf, nameInputl,mobileInput,emailInput, passwordInput, form.genderError, form.dob,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
        let genderError = document.getElementById('genderError');
       genderError.style.display = 'none';
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
       //event.preventDefault();
        return;
      } 
      else {
        repasswordInput.classList.remove('is-invalid');
        repasswordInput.classList.add('is-valid');
        repasswordError.textContent = '';
      }
      // Password validation ends here


      // Gender validation starts here
      let genderChecked = form.querySelector('input[name="gender"]:checked');
      let genderError = document.getElementById('genderError');
      if (!genderChecked) {
        genderError.style.display = 'block';
         clearOtherErrors([nameInputf, nameInputl, mobileInput,emailInput,passwordInput,repasswordInput, form.dob, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
         let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
       //  event.preventDefault();
        return;
      } 
      else {
        genderError.style.display = 'none';
      }
      // Gender validation ends here

      // DOB Validation starts here
      let dobInput = form.dob;
      let date = new Date(dobInput.value);
      let stdate = new Date("2007-01-01");
      let dobError = document.querySelector('#dob + .invalid-feedback');
      if (isNaN(date.getMonth()) || isNaN(date.getDate()) || isNaN(date.getFullYear())) {
        dobInput.classList.add('is-invalid');
        dobError.textContent = 'Please enter a valid date';
        clearOtherErrors([nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
       // event.preventDefault();
        return;
      } 
      else if (date > stdate) {
        dobInput.classList.add('is-invalid');
        dobError.textContent = 'You must be at least 18 years old';
        clearOtherErrors([nameInputf, nameInputl,mobileInput, emailInput,passwordInput,repasswordInput, form.gender,  form.address1, form.address2, form.city, form.country,form.pincode,form.skill]);
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
       // event.preventDefault();
        return;
      } else {
        dobInput.classList.remove('is-invalid');
        dobInput.classList.add('is-valid');
        dobError.textContent = '';
      }
      // DOB Validation ends here
      
     
    // Address 1 validation starts here  
    let addressInput1 = form.address1;
    let addressError1 = document.getElementById('addressError1');
    let addressRelated1 = [nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, form.address2,form.city, form.country,form.pincode,form.skill];
    if (!addressInput1.value.trim()) {
      addressInput1.classList.add('is-invalid');
      if (addressError1) addressError1.textContent = 'Please enter your address';
      clearOtherErrors(addressRelated1);
      let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
     // event.preventDefault();
      return;
    } 
    else {
      addressInput1.classList.remove('is-invalid');
      addressInput1.classList.add('is-valid');
      if (addressError1) addressError1.textContent = '';
    }
    // Address 1 validation ends here
    
    // Address 2 validation starts here
    let addressInput2 = form.address2;
    let addressError2= document.getElementById('addressError2');
    let addressRelated2 = [nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, addressInput1,form.city, form.country,form.pincode,form.skill];
    if (!addressInput2.value.trim()) {
      addressInput2.classList.add('is-invalid');
       if (addressError2) addressError2.textContent = 'Please enter your address';
        clearOtherErrors(addressRelated2);
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
        //  event.preventDefault();
      return;
    } 
    else {
        addressInput2.classList.remove('is-invalid');
        addressInput2.classList.add('is-valid');
        if (addressError2) addressError2.textContent = '';
    }
    // Address 2 validation ends here

    // City validation starts here
    let cityInput = form.city;
    let cityError = document.getElementById('cityError');
    let cityRelated = [nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, addressInput1, addressInput2, form.country,form.pincode,form.skill];
    if (!cityInput.value.trim()) {
        cityInput.classList.add('is-invalid');
        if (cityError) cityError.textContent = 'Please select your city';
        clearOtherErrors(cityRelated);
        // event.preventDefault();
      return;
    } 
    else {
        cityInput.classList.remove('is-invalid');
        cityInput.classList.add('is-valid');
        if (cityError) cityError.textContent = '';
    }
    // City validation ends here

    // Country validation starts here
    let countryInput = form.country;
    let countryError = document.getElementById('countryError');
    let countryRelated = [nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, addressInput1,addressInput2, cityInput, form.pincode,form.skill];
    if (!countryInput.value.trim()) {
        countryInput.classList.add('is-invalid');
        if (countryError) countryError.textContent = 'Please select your country';
        clearOtherErrors(countryRelated);
        let skillError = document.getElementById('skillError');
        skillError.style.display = 'none';
        //  event.preventDefault();
      return;
    } 
    else {
        countryInput.classList.remove('is-invalid');
        countryInput.classList.add('is-valid');
        if (countryError) countryError.textContent = '';
    }
    // Country validation ends here

    // Pincode validation starts here
    let pincodeInput = form.pincode;
    let pincodeError = document.querySelector('#pincode + .invalid-feedback');
    let pincodePattern = /^[0-9]+$/;
    if (!pincodePattern.test(pincodeInput.value)) {
         pincodeInput.classList.add('is-invalid');
         pincodeError.textContent = "Please enter your pincode";
         clearOtherErrors([nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, addressInput1, addressInput2, cityInput,countryInput,form.skill])
         let skillError = document.getElementById('skillError');
         skillError.style.display = 'none';
         //  event.preventDefault();
        return;
    }
    else if (pincodeInput.value.length < 6 || pincodeInput.value.length > 6) {
         pincodeInput.classList.add('is-invalid');
         pincodeError.textContent = "Pincode must be 6 digits";
         clearOtherErrors([nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, addressInput1, addressInput2, cityInput,countryInput,form.skill])
         let skillError = document.getElementById('skillError');
         skillError.style.display = 'none';
         // event.preventDefault();
        return;
      }
      else {
         pincodeInput.classList.remove('is-invalid');
         pincodeInput.classList.add('is-valid');
         pincodeError.textContent = "";
      }
      // Pincode validation ends here
    
    // Skills validation starts here 
    let skillChecks = form.querySelectorAll('input[name="skill"]');
    let skillError = document.getElementById('skillError');
    let skillRelated = [nameInputf, nameInputl,mobileInput, emailInput, passwordInput, repasswordInput, form.gender, dobInput, addressInput1, addressInput2, cityInput, countryInput,pincodeInput];
    let anyskillChecked = false;
    skillChecks.forEach(chk => {
      if (chk.checked) anyskillChecked = true;
    });
    if (!anyskillChecked) {
      
      if (skillError) {
        skillError.textContent = 'Please enter your area of skill';
        skillError.style.display = 'block';
      }
     // event.preventDefault();
      return;
    } 
    else {
      skillChecks.forEach(chk => {
      chk.classList.remove('is-invalid');
      chk.classList.add('is-valid');
      });
      if (skillError) {
         skillError.textContent = '';
         skillError.style.display = 'none';
      }
    }
    // Skills validation ends here


    form.classList.add('was-validated');
    if (form.querySelector('.is-invalid')) {
    //  event.preventDefault();
      return;
    }
    // event.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
};
