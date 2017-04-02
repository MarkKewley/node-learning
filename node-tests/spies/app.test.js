const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
    const db = {
      saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
       let spy = expect.createSpy();
       spy('Mark', 26);
       expect(spy).toHaveBeenCalled();
       expect(spy).toHaveBeenCalledWith('Mark', 26)
    });

    it('should call saveUser on the db with user object', () => {
        const email = 'mark@example.com';
        const password = '123abc';


        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        })
    })

});