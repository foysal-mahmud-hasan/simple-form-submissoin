document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const isAccepted = confirm("Do you accept the form submission?");

    if (isAccepted) {
      alert("Form submitted successfully!");
      console.log("Form Data:", data);
    } else {
      alert("Form submission rejected.");
      console.log("Rejected Form Data:", data);
    }
  });
});
