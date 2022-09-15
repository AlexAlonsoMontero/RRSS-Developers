const gitApi = require('../api/gitApi');
const Github = require('../models/GitHub');
const Repository = require('../models/Repository');
const UpdateDate = require('./UpdateDate');

//UPDATE CON API EXTERNA
const updateUserDetails = async () => {
    try {
        const gitHubs = await Github.find();
        for (git of gitHubs) {
            const details = await gitApi.getGitUserDetails(git.gitUser);
            git._doc = {
                ...git._doc,
                ...details
            }
            await Github.findByIdAndUpdate(git._id, git)
        }
        await UpdateDate.UpdateDate();
        return gitHubs
    } catch (error) {
        throw {
            status: error?.code || 500,
            message: error?.message || "No se ha podido actualizar bd detalles de usuario de Github"
        }
    }
}

const updateReposInfo = async () => {
    try {
        const gitHubs = await Github.find();
        let remoteRepo = []
        for (git of gitHubs){
            remoteRepos = await gitApi.getGitReposByUser(git.gitUser);
            remoteRepos.map(repo  => {
                repo.gitHub = git._id
                return repo
            })
            await Repository.deleteMany({})
            await Repository.insertMany(remoteRepos)
            remoteRepo.push(remoteRepos);
        }
        await UpdateDate.UpdateDate();
        return remoteRepos
    } catch (error) {
        throw {
            status: error?.code || 500,
            message: error?.message || "No se ha podido actualizar bd detalles de usuario de Github"
        }
    }
}


/********************************** */
module.exports = {
    updateUserDetails,
    updateReposInfo,
}