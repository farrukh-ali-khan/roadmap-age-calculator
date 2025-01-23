// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize flatpickr on the birthdate input
  flatpickr("#birthdate", {
    dateFormat: "Y-m-d",
  });

  document
    .getElementById("age-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get the birthdate input value
      const birthdate = document.getElementById("birthdate").value;

      // Validate the birthdate
      if (!birthdate) {
        alert("Please enter a valid birthdate using the date picker");
        return;
      }

      // Parse the birthdate using Luxon
      const DateTime = luxon.DateTime;
      const birthDate = DateTime.fromISO(birthdate);
      const now = DateTime.now();

      // Calculate the age
      const years = now.diff(birthDate, "years").years;
      const months = now.diff(birthDate, "months").months % 12;
      const days = now.diff(birthDate, "days").days % 30;

      // Display the result
      document.getElementById("result").innerText = `You are ${Math.floor(
        years
      )} years, ${Math.floor(months)} months, and ${Math.floor(
        days
      )} days old.`;
    });
});
