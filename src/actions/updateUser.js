import db from '../db'

export default function updateUser(user) {
  return db.one(`
    UPDATE
      users
    SET
      name = $/name/,
      email = $/email/
    WHERE
      id = $/id/
    RETURNING
      *
  `, user)
}
