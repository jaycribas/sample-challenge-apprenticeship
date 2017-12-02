import express from 'express'
import {
  updateUser,
  getUserById,
} from '../actions'

const router = express.Router()

router.route('/:id')
  .get((req, res, next) => {
    getUserById(req.params.id)
      .then((user) => {
        res.render('users/profile', {user})
      })
      .catch(next)
  })
  .put((req, res) => {
    updateUser(req.body)
  })

router.get('/:id/edit', (req, res, next) => {
  getUserById(req.params.id)
    .then((user) => {
      res.render('users/edit', {user})
    })
    .catch(next)
})

export default router
