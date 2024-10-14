document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_27e0r0a", "template_7q09g1c", params)
      .then((response) => {
        alert("Email was sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send email. Please try again.");
      });
  });
