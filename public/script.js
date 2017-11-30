const url = '/users/'
const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const userFormData = $('#userForm').serialize()
  const id = $('[name="id"]', '#userForm').val()

  // const fetchOptions = {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  //   },
  //   body: userFormData,
  // }
  //
  // fetch(url + id, fetchOptions)

  const ajaxOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data: userFormData,
  }
  $.ajax(url + id, ajaxOptions)
})
