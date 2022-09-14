const express = require('express');
const DeveloperControllers = require('../../controllers/DeveloperControlles');
const GithubControllers = require('../../controllers/GitHubController');

const createDb = require('../../controllers/WriteDb');

const router = express.Router();
router
    .get('/JSON',createDb.writeDb) //Crea las colecciones de la bd y las rellena con los datos del JSON sólo se usa la primera vez
    .get('/developers', DeveloperControllers.getDevelopers) //Carga la info regitrada de los developers con todos lo datos de todas las colecciones

    //Consume api externa
router
    .get('/developers/update/github-users/',GithubControllers.updateGitInfo) //actualiza los datos de todos los usuarios




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
