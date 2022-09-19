const express = require('express');
const DeveloperControllers = require('../../controllers/DeveloperControlles');
const GithubControllers = require('../../controllers/GitHubController');
const RepositoryController = require ('../../controllers/RepositoryController');
const YoutubeController = require('../../controllers/YoutubeController');
const TwitterController = require('../../controllers/TwitterController')

const createDb = require('../../controllers/WriteDb');

const router = express.Router();

//RUTAS PARA PREPARAR LA BASE DE DATOS:
//Crea la base de datos y cargar la info de api externa
router
    .get('/JSON', createDb.writeDb)
    .get('/developers/update/github-users/', GithubControllers.updateGitInfo)
    .get('/youtube/update', YoutubeController.updateYoutubeInfo)
    .get('/twitter/update', TwitterController.updateTwitter)

    //CONSULTAS DEVELOPERS
    .get('/developers', DeveloperControllers.getDevelopers)
    .get('/developers/info', DeveloperControllers.getDevelopersBasicInfo)

    //CONSULTAS GITHUB
    .get('/developers/git-hub', GithubControllers.getGitInfo )

    //CONSULTAS REPOSITORIOS
    .get('/developers/git-hub/repositories', RepositoryController.getAllRepos)
    .get('/developers/git-hub/respositories/:gitHubId', RepositoryController.getReposByDeveloper)
    .get('/developers/git-hub/repositories/language/:language', RepositoryController.getReposByLanguage)
    .get('/developers/git-hub/repositories/search', RepositoryController.searchText)

    //CONSULTAS YOUTUBE
    .get('/developers/youtube/list-videos', YoutubeController.getListAndVideos)
    .get('/developers/youtube/list-videos/:developerId', YoutubeController.getListAndVideosByDeveloper)
    .get('/developers/youtube/search/', YoutubeController.searchText)
    
    //CONSULTAS TWITTER
    .get('/developers/twitter/:twitterId', TwitterController.getTwitterById)


module.exports = router;
