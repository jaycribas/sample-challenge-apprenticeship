import db from '../db'

export default function signUp(user) {
  return db.one(`
    INSERT INTO
      users (name, email, password)
    VALUES
      ($/name/, $/email/, $/password/)
    RETURNING
      *
  `, user)
}
