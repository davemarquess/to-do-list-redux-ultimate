export const handleChange = (e) => ({
  type: 'HANDLE_CHANGE',
  payload: e.target.value,
})

export const handleSubmit = (e) => ({
  type: 'HANDLE_SUBMIT',
  payload: e
})

export const handleDelete = (id) => ({
  type: 'HANDLE_DELETE',
  payload: id,
})