const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#title-input-new-post').value;
  const body = document.querySelector('#body-input-new-post').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
