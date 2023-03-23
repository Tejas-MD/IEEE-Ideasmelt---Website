// Get the form data from local storage
const formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

// Get the tbody element to display the form data
const tbody = document.getElementById('form-data');

// Loop through the form data and create a row for each entry
formDataArray.forEach(formData => {
  // Create a new row element
  const row = document.createElement('tr');

  // Add the name, email, usn, and link fields to the row
  const name = document.createElement('td');
  name.textContent = formData.name;
  row.appendChild(name);

  const email = document.createElement('td');
  email.textContent = formData.email;
  row.appendChild(email);

  const usn = document.createElement('td');
  usn.textContent = formData.usn;
  row.appendChild(usn);

  const link = document.createElement('td');
  link.textContent = formData.link;
  row.appendChild(link);

  // Add the row to the tbody element
  tbody.appendChild(row);
});


// Get the clear button element
const clearButton = document.getElementById('clear-button');

// Listen for click events on the clear button
clearButton.addEventListener('click', (event) => {
    // Clear all the form data from local storage
    localStorage.removeItem('formData');

    // Clear all the rows from the table body
    const tbody = document.getElementById('form-data');
    tbody.innerHTML = "";

    // Show a prompt message indicating that the data has been cleared
    alert("All entries cleared!");
});
