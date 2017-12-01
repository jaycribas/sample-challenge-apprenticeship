import db from '../db'
import middlewares from '../middlewares'

export default function signUp(user) {
  return middlewares.hashPassword(user.password)
    .then((hash) => {
      user.password = hash
      return db.one(`
        INSERT INTO
        users (name, email, password)
        VALUES
        ($/name/, $/email/, $/password/)
        RETURNING
        *
        `, user)
    })
}
