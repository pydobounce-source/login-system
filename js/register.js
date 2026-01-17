const registerForm = document.getElementById("register-form");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!username || !email || !password) {
      errorMessage.textContent = "Please fill all fields";
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(u => u.email === email);
    if (exists) {
      errorMessage.textContent = "Email already registered";
      return;
    }
          
    const hashedPassword = btoa(password); // simple encoding

users.push({
  username,
  email,
  password: hashedPassword
});

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful. Please login.");
    window.location.href = "login.html";
  });
}