import supertest from 'supertest';
import {expect} from 'chai';



function generateRandomNumber() {
    const min = 0; // Minimum value for the random number
    const max = 9; // Maximum value for the random number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  let x = generateRandomNumber();
  console.log(x);

const endpoint = supertest('https://parabank.parasoft.com/parabank/');
//const TOKEN = '65b238ce613c1f04159887d49e144d7e0ce250fbbc233e958c0a7f2ec5832070';



 describe('APIs', () => {

  //get APIs 
  describe('GET', () =>{
    it('services',(done) => {
        
      endpoint.get('services.htm').then((res) => {
          //console.log(res.body);
          expect(res).to.have.status(200);
      done();
      })
          .catch((err) => {
              console.error(err);
                  });
  });
  it('logout',() => {
    return endpoint.get('logout.htm').then((res)=> {
      //console.log(res.body);
    })
    .catch((err)=>{
        console.error(err);
    });

   });
  });
    
// post APIs
  describe('POST',()=>{

    it('POST/register' , () => {
      const data = {
      firstName: `Test${x}`,
  lastName: `Test${x}`,
  street: 'city',
  city: 'bangalore',
  state: 'karnataka',
  zipCode: '111',
  phoneNumber: '111',
  ssn: '111',
  username: `test${x}`,
  password: `test${x}`,
  repeatedPassword: `test${x}`

      };
  
      return endpoint.post('register.htm').send(data).then((res) => {
      //console.log(res.body);
      expect(res).to.have.status(200);
        })
        .catch((err)=>{
          console.error(err);
        });
      
  });

 it('POST/login' , () => {
     const cred = {
  username: `test${x}`,
  password: `test${x}`
     };
     return endpoint.post('login.htm').send(cred).then((res) => {
          //console.log(res.body);
          expect(res).to.have.status(200);
     })
     .catch((err)=>{
          console.error(err);
     });
 });
});

  });





   










