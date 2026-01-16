const isLoggedIn = localStorage.getItem("isLoggedin");
const path = window.location.pathname;

// Protect welcome page
if (path.includes("welcome.html") && isLoggedIn !== "true") {
  window.location.replace("login.html");
}

// Prevent logged-in users from seeing login
if (path.includes("login.html") && isLoggedIn === "true") {
  window.location.replace("welcome.html");
}