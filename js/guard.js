const loginTime = localStorage.getItem("loginTime");
const SESSION_LIMIT = 30 * 60 * 1000; // 30 minutes

if (loginTime && Date.now() - loginTime > SESSION_LIMIT) {
  localStorage.clear();
  window.location.href = "login.html";
}

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