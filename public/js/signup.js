const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();

  const response = await fetch('/api/user/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log("hi");

  if (response.ok) {
    console.log("ok response");
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
