import db from '../db'

export default function signIn(user) {
  return db.one(`
    SELECT
      *
    FROM
      users
    WHERE
      email = $/email/
    AND
      password = $/password/
  `, user)
}
