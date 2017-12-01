import express from 'express'
import session from 'express-session'

import albums from './albums'
import users from './users'
import authentication from './authentication'

const routes = express.Router()

routes.use(session({
  key: 'user_sid',
  secret: 'shh top secret',
  resave: false,
  saveUninitialized: false,
}))

routes.use('/', authentication)

routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/albums', albums)
routes.use('/users', users)

export default routes
