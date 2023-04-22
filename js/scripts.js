// Clear input fields after form submission and capture form input //
const submit = document.getElementById('submit');

submit.addEventListener('click', function handleClick(event) {
  // 👇️ when submitting the form (prevents page reload)
  event.preventDefault();

  const namesInput = document.getElementById('names');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Send values to server
  console.log(namesInput.value);
  console.log(emailInput.value);
  console.log(messageInput.value);

  // 👇️ clear input field
  namesInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

});