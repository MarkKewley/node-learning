const utils = require('./utils');
const expect = require('expect');

describe('Utils Test', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            const res = utils.add(1, 2);
            expect(res)
                .toBe(3)
                .toBeAn('number')
        });
    });

    describe('#asyncAdd', () => {
        it('should add two numbers asynchronously', (done) => {
            utils.asyncAdd(4, 3, sum => {
                expect(sum).toBe(7).toBeAn('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square the number', () => {
            const res = utils.square(2);
            expect(res)
                .toBe(4)
                .toBeAn('number')
        });
    });

    describe('#asyncSquare', () => {
        it('should square the number asynchronously', (done) => {
            utils.asyncSquare(2, sq => {
                expect(sq)
                    .toBe(4)
                    .toBeAn('number');
                done();
            })
        });
    });


    // it('should expect some values', () => {
    //     expect(12).toNotBe(13);
    //     expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
    //     expect([1, 2, 3]).toInclude(1);
    //     expect({name: 'Mark', age: 26, location: 'Minnesota'}).toInclude({name: 'Mark'})
    // });

    describe('#setName', () => {
        it('should set the first and last name', () => {
            const user = utils.setName({
                age: 26,
                location: 'Minnesota'
            }, 'Mark Kewley');
            expect(user).toInclude({firstName: 'Mark', lastName: 'Kewley'});
        });
    });
});
