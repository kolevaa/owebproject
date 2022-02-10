const formRef = document.querySelector('form');

let id = 1;

formRef.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = formRef.querySelector('input[type="text"]').value;
  const body = formRef.querySelector('textarea').value;
  

  localStorage.setItem(id, JSON.stringify({ title, body }));
  id++;
  formRef.querySelector('input[type="text"]').value = '';
  formRef.querySelector('textarea').value = '';
});

const getButton = document
  .querySelector('button[data-get]')
  .addEventListener('click', () => {
    Object.keys(localStorage).forEach((blogId) => {
      const parsed = JSON.parse(localStorage.getItem(blogId));

      console.log('Blog:', parsed.title, 'So sodrzina:', parsed.body);
    });
  });
