// Country name animation
const countries = ["India", "France", "Germany", "United States", "Japan", "Australia"];
let index = 0;
setInterval(() => {
  const countryName = document.getElementById("country-name");
  index = (index + 1) % countries.length;
  countryName.textContent = countries[index];
}, 200);

// Booking form validation
document.getElementById("travelForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destination = document.getElementById("destination").value;
  const persons = document.getElementById("persons").value;
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);
  const description = document.getElementById("description").value.trim();

  if (!destination || !persons || !startDate || !endDate || !description) {
    alert("Please fill all fields correctly!");
    return;
  }

  const today = new Date();
  if (startDate <= today) {
    alert("Start date must be in the future!");
    return;
  }

  if (endDate <= startDate) {
    alert("End date must be after the start date!");
    return;
  }

  if (description.length < 50 || description.length > 500) {
    alert("Description must be between 50 and 500 characters!");
    return;
  }

  alert("Booking Successful!");
  this.reset();
});

// BOOKING FORM VALIDATION
function validateBookingForm() {
  const whereTo = document.getElementById("whereTo").value;
  const persons = document.getElementById("persons").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value.trim();

  // Check all fields filled
  if (!whereTo || !persons || !startDate || !endDate || !description) {
    alert("Please fill all fields!");
    return false;
  }

  // Check number of persons
  if (persons <= 0) {
    alert("Please enter a valid number of persons!");
    return false;
  }

  // Check date validation
  const today = new Date().toISOString().split("T")[0];
  if (startDate < today) {
    alert("Start date must be in the future!");
    return false;
  }

  if (endDate <= startDate) {
    alert("End date must be after the start date!");
    return false;
  }

  // Check description length
  if (description.length < 50 || description.length > 500) {
    alert("Description must be between 50 and 500 characters.");
    return false;
  }

  alert("Booking successful!");
  return true;
}

// LOGIN FORM VALIDATION
function validateLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please fill all fields!");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return false;
  }

  alert("Login successful!");
  return true;
}

// REGISTER FORM VALIDATION
function validateRegister() {
  const name = document.getElementById("fullname").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!name || !contact || !dob || !email || !password || !gender) {
    alert("Please fill all fields!");
    return false;
  }

  // Validate contact number
  if (!/^\d{7,15}$/.test(contact)) {
    alert("Please enter a valid contact number (7-15 digits).");
    return false;
  }

  // Validate password
  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }

  // Validate email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Invalid email format!");
    return false;
  }

  alert("Registration successful!");
  return true;
}