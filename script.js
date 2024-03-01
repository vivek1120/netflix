// Validation for Homepage form

document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.getElementById('email');
    var dangerButton = document.getElementById('dangerButton');
    dangerButton.addEventListener('click', function() {
      if (validateEmail()){
        //alert('Email is entered. Performing action...');
      } else {
        alert('Please enter your email before clicking the button.');
      }
    });

    function validateEmail() {
      return emailInput.value.trim() !== '';
    }
  });

  function validate(){
    var mail = document.getElementById("text").value
}
  
  // Validation for footer form

  document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.getElementById('email2');
    var dangerButton = document.getElementById('dangerButton2');
    dangerButton.addEventListener('click', function() {
      if (validateEmail()){
        //alert('Email is entered. Performing action...');
      } else {
        alert('Please enter your email before clicking the button.');
      }
    });
  
    function validateEmail() {
      return emailInput.value.trim() !== '';
    }
  });

  function validate(){
      var mail = document.getElementById("text").value
  }

  