import supertest from 'supertest';
import {expect} from 'chai';



const endpoint = supertest('https://gorest.co.in/public/v2/');
const TOKEN = '65b238ce613c1f04159887d49e144d7e0ce250fbbc233e958c0a7f2ec5832070';

describe('users', () => {
   it('GET/users',() => {
    return endpoint.get(`users?access-token=${TOKEN}`).then((res) => {
        //console.log(res.body);
       //expect(res).to.have.property('id');
       expect(res).to.have.status(200);
        })
    .catch((err) => {
console.error(err);
    });
});

    it('POST/users' ,() => {
        const data = {
        email: `test${Math.floor(Math.random()*9999)}@mail.test`,
        gender: 'female',
        name: 'test',
        status: 'inactive'
    };
       return endpoint.post('users').set('Authorization',`Bearer ${TOKEN}`).send(data).then((res) => {
            
            expect(res.body).to.deep.include(data);
        expect(res.body).to.have.property('id');
            
        });
    });

});




