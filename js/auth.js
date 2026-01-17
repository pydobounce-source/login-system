const form = document.querySelector(".login-box");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!email || !password) {
      errorMessage.textContent = "Please fill all fields";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      u => u.email === email && u.password === btoa(password)
    );

    if (!foundUser) {
      errorMessage.textContent = "Invalid email or password";
      return;
    }

    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("loginTime", Date.now());
    localStorage.setItem("username", foundUser.username);

    window.location.href = "welcome.html";
  });
}