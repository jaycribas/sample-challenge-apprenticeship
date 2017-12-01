import express from 'express'
import {signUp, signIn} from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render(
    'authentication/sign-up',
    {warning: ''},
  )
})

router.post('/sign-up', (req, res) => {
  signUp(req.body)
    .then((user) => {
      req.session.user = user
      delete req.session.user.password
      res.redirect('/')
    })
    .catch(() => {
      res.render(
        'authentication/sign-up',
        {warning: 'Blank field or email already exists'},
      )
    })
})

router.get('/sign-in', (req, res) => {
  res.render(
    'authentication/sign-in',
    {warning: ''},
  )
})

router.post('/sign-in', (req, res) => {
  return signIn(req.body)
    .then((user) => {
      req.session.user = user
      delete req.session.user.password
      res.redirect('/')
    })
    .catch(() => {
      res.render(
        'authentication/sign-in',
        {warning: 'Invalid email or password.'},
      )
    })
})

export default router
