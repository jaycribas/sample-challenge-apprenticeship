import bcrypt from 'bcrypt'

const hashPassword = (plainTextPassword) => {
  const saltRounds = 10
  return bcrypt.hash(plainTextPassword, saltRounds)
}

const comparePassword = (plainTextPassword, hash) => {
  return bcrypt.compare(plainTextPassword, hash)
}

const isLoggedIn = (req, res, next) => {
  if (req.session.user) return next()
  res.redirect('/')
}

export default {
  isLoggedIn,
  hashPassword,
  comparePassword,
}
