function loginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginButton = document.getElementById("loginButton");

  if (email === "" || password === "") {
    alert("Please fill in both fields.");
    return;
  }

  const data = {
    email: email,
    password: password,
  };

  console.log("Login data:", data);
}
