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

// Toggle through What we Do section to show/hide text //
$(document).ready(function() {
  $("#designicon").click(function() {
    $("#designDescription").toggle();
  });
});

$(document).ready(function() {
  $("#devicon").click(function() {
    $("#developmentDescription").toggle();
  });
});

$(document).ready(function() {
  $("#producticon").click(function() {
    $("#productDescription").toggle();
  });
});

// Creatting hover effect and displaying product name //

$(document).ready(function() {
  $("#work4").hover(function() {
    $("#black1").toggle();
  });
});

$(document).ready(function() {
  $("#work3").hover(function() {
    $("#ontariosecurity").toggle();
  });
});

$(document).ready(function() {
  $("#work2").hover(function() {
    $("#art").toggle();
  });
});

$(document).ready(function() {
  $("#work1").hover(function() {
    $("#series").toggle();
  });
});

$(document).ready(function() {
  $("#work5").hover(function() {
    $("#website").toggle();
  });
});

$(document).ready(function() {
  $("#work6").hover(function() {
    $("#profile").toggle();
  });
});

$(document).ready(function() {
  $("#work4").hover(function() {
    $("#black").toggle();
  });
});

$(document).ready(function() {
  $("#work7").hover(function() {
    $("#logomockup").toggle();
  });
});

$(document).ready(function() {
  $("#work8").hover(function() {
    $("#restaurent").toggle();
  });
});