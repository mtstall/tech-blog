const postId = document.querySelector('#post-id').textContent;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#title-input-edit-post').value;
  const postContent = document.querySelector('#body-input-edit-post').value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      postContent
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
