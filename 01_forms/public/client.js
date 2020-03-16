window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("message-form");
  form.onsubmit = (event) => {
    // this prevents the url from being changed and moving to a different page
    event.preventDefault();
    const nameInput = event.target.elements["name"];
    const messageInput = event.target.elements["message"];

    const messageBody = {
      name: nameInput.value,
      message: messageInput.value
    };
    fetch("/message", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageBody)
    });
  }
});