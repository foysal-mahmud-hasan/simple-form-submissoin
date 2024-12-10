function Navigate() {
  event.preventDefault();
  window.location.href = "./secondPage.html";
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", Navigate);
});
