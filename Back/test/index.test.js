const  mongoose = require('mongoose');
const supertest = require('supertest');
const { dbConnection } = require('../db/config');
const { app , server } = require('../index');

beforeAll(async()=>{
    await dbConnection()
    
    
})

test('primer test',()=>{

})

afterAll(()=>{
    server.close()
    mongoose.connection.close()
})