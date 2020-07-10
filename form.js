const form = document.forms[0];
const secondForm = document.forms[1];


//Listen to the submit form event
form.addEventListener("submit", event => {
  event.preventDefault();
  new FormData(form);
});

//Listen to the submit form event
secondForm.addEventListener("submit", event => {
  event.preventDefault();
  new FormData(form);
});

//Shows message after API response
document.addEventListener("formdata", event => {
  const body = Object.fromEntries(event.formData.entries());
  const jsonBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open("POST", "https://iamaWebsite.com/users/");
  request.send(jsonBody);

  request.onload = function() {
    const jsonResponse = JSON.parse(this.response);
    document.body.innerHTML += `Response from the server: ${jsonResponse.status} with code: ${jsonResponse.code}`;
  };
});


