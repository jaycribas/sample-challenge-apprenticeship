import express from 'express'
import updateUser from '../actions'

const router = express.Router()

router.route('/:id')
  .get((req, res) => {
    res.render('users/profile')
  })
  .put((req, res) => {
    updateUser(user)
  })

router.get('/:id/edit', (req, res) => {
  const user = {id: 1, name: 'Bob', email: 'bob@bob.com'}
  res.render('users/edit', { user })
})

export default router
