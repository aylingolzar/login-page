const username = document.querySelector(".username");
const password = document.querySelector(".password");
const button = document.querySelector(".btn");

const firsthidetext = document.querySelector(".user-text");
const secondhidetext = document.querySelector(".pass-text");
const newpage = document.querySelector(".after-all");
const btn = document.querySelector(".btn2");
const google = document.querySelector(".google");

username.addEventListener("keyup", function () {
  const user = username.value;
  console.log(user);
  if (user.length > 3) {
    firsthidetext.classList.add("hidden");
    // firsthidetext.classList.add("succes");
    // firsthidetext.innerHTML = "یوزرنیم درست است";
  } else {
    firsthidetext.classList.remove("hidden");
    // firsthidetext.classList.remove("succes");
    firsthidetext.innerHTML = "یوزرنیم باید بیشتر از 3 کاراکتر باشد";
    firsthidetext.classList.add("unsucces");
  }
});
password.addEventListener("keyup", function () {
  const pass = password.value;
  console.log(pass);
  if (pass.length > 8) {
    secondhidetext.classList.add("hidden");

    // secondhidetext.classList.add("succes");

    // secondhidetext.innerHTML = " پسورد درست است";
  } else {
    secondhidetext.classList.remove("hidden");
    secondhidetext.classList.add("unsucces");
    secondhidetext.innerHTML = "پسورد باید بیشتر از8 کاراکتر باشد";
  }
});
button.addEventListener("click", function () {
  event.preventDefault();
  const user = username.value;
  const pass = password.value;
  if (pass.length > 8 && user.length > 3) {
    newpage.classList.remove("hidden");
  }
});
btn.addEventListener("click", function () {
  const user = username.value;
  const pass = password.value;

  newpage.classList.add("hidden");
});

google.addEventListener("click", function (event) {
  event.preventDefault();
  window.open("https://www.google.com", "_blank");
});
