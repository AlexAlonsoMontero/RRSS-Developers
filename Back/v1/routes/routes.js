const express = require('express');
const DeveloperControllers = require('../../controllers/DeveloperControlles')

const createDb = require('../../controllers/WriteDb');

const router = express.Router();
router
    .get('/JSON',createDb.writeDb)
    .get('/developers', DeveloperControllers.getDevelopers)
    // .get('/',async(request, response)=>{
    //     try {
    //         const developer = await Developer.find().populate('gitHub');
    //         const gitHub = await GitHub.find().populate('developer');
            
    //          response.send({
    //             status: "ok",
    //             info:{
    //                 developer,
    //                 gitHub
    //             }
            
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }

    // })
    
module.exports = router;
