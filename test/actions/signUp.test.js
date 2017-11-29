import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    const user = {name: 'Testrinal', email: 'testrinal@test.com', password: '123'}
    return signUp(user)
      .then((newUser) => {
        expect(newUser.name).to.equal('Testrinal')
        expect(newUser.email).to.equal('testrinal@test.com')
        expect(newUser.password).to.equal('123')
        expect(newUser).to.have.all.keys('id', 'name', 'email', 'password')
      })
  })
})
