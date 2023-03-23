// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {

    // Select the form element
    const form = document.querySelector("#login-form");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
  
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Select the username and password input fields
      const usernameInput = document.querySelector("#username");
      const passwordInput = document.querySelector("#password");
  
      // Get the values of the input fields
      const usernameValue = usernameInput.value.trim();
      const passwordValue = passwordInput.value.trim();
  
     
    // Define sample valid username and password combinations
    const validUsers = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" },
        { username: "user3", password: "pass3" }
      ];
  
      // Check if the input fields are not empty and match a valid combination
      const isValid = validUsers.some(user => user.username === usernameValue && user.password === passwordValue);
      if (isValid) {
        // Redirect the user to a new page on successful login
        window.location.href = "../Admin Page/index.html";
      } else {
        // Display an error message if the input fields are empty or invalid
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = "Invalid username or password.";
        form.appendChild(errorMessage);
      }
    });
  
  });
  