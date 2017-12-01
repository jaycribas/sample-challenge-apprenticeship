import db from '../db'
import middlewares from '../middlewares'

export default function signIn(user) {
  return db.one(`
    SELECT
      *
    FROM
      users
    WHERE
      email = $/email/
  `, user)
    .then((dbUser) => {
      return middlewares.comparePassword(user.password, dbUser.password)
        .then((compareResult) => {
          if (!compareResult) throw Error
        })
    })
}
