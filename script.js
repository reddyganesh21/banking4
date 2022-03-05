const password = document.getElementsByClassName(".password");
const login = document.querySelector("button");
login.addEventListener("click", function () {
  if (password.value === "12345") {
    return true;
  } else {
    alert("hey your password/username is wrong");
  }
});
