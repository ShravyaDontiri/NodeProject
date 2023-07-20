import supertest from 'supertest';
//import {expect} from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect;


//function
function generateRandomNumber() {
    const min = 0; // Minimum value for the random number
    const max = 9; // Maximum value for the random number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  let x = generateRandomNumber();
  //console.log(x);

const endpoint = supertest('https://parabank.parasoft.com/parabank/');
//const TOKEN = '65b238ce613c1f04159887d49e144d7e0ce250fbbc233e958c0a7f2ec5832070';



 describe('APIs', () => {

  //get APIs 
  describe('GET', () =>{
    it('services',async() => {
        
     const res = await endpoint.get('services.htm');
     //console.log(res.body);
     expect(res).to.have.status(200);
      })
          
  
  it('logout',async () => {
    const res = await endpoint.get('logout.htm');
      //console.log(res.body);
      expect(res).to.have.status(200);
    })

   });
  
    
// post APIs
  describe('POST',()=>{

    it('POST/register' , async () => {
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
  
      const postRes = await endpoint.post('register.htm').send(data)
      console.log(postRes.body);
      expect(postRes).to.have.status(200);
       
      
  });

 it('POST/login' , async() => {
     const cred = {
  username: `test${x}`,
  password: `test${x}`
     };
     const postRes = await endpoint.post('login.htm').send(cred)
          console.log(postRes.body);
          expect(postRes).to.have.status(200);
     
 });
});

 });

  





   










