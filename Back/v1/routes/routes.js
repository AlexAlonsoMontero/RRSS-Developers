const express = require('express');
const DeveloperControllers = require('../../controllers/DeveloperControlles');
const GithubControllers = require('../../controllers/GitHubController');
const RepositoryController = require ('../../controllers/RepositoryController');

const createDb = require('../../controllers/WriteDb');

const router = express.Router();

//RUTAS PARA PREPARAR LA BASE DE DATOS:
//Crea la base de datos y cargar la info de api externa
router
    .get('/JSON', createDb.writeDb)
    .get('/developers/update/github-users/', GithubControllers.updateGitInfo)

    //CONSULTAS DEVELOPERS
    .get('/developers', DeveloperControllers.getDevelopers)
    .get('/developers/info', DeveloperControllers.getDevelopersBasicInfo)

    //CONSULTAS REPOSITORIOS
    .get('/repositories', RepositoryController.getAllRepos)
    .get('/repositories/gitHub/:gitHubId', RepositoryController.getReposByDeveloper)
    .get('/repositories/language/:language', RepositoryController.getReposByLanguage)
    .get('/repositories/search', RepositoryController.searchRepos)



module.exports = router;
