import 'babel-polyfill'
const request = require('supertest')
const express = require('express')
const app = express()

describe('API Test', () => {
    test('responds with json', () => {
        try{
        request(app)
        .post('http://localhost:8081/GetNLPData')
        .send({url:'https://jamesclear.com/five-step-creative-process'})
        .expect(200);
        }catch(error){
            console.log('error : '+error)
        }
        
    });
})
