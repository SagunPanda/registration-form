const scriptURL = 'https://script.google.com/macros/s/AKfycbxVwO5VhxQkV5ZSYLA0wuPf7kdqusDBpFnlROfUqhdQjHYTQu4RAJSfQ3gWuXe323RS/exec'
const form = document.forms['googleSheetdb']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Your registration is Successfull"))
    .catch(error => console.error('Error!', error.message))
})