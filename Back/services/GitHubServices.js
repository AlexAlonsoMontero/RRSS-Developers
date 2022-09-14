const gitApi = require('../api/gitApi');
const Github = require('../models/GitHub');



//UPDATE CON API EXTERNA
const updateUserDetails = async (gitUSer) => {
    try {
        const gitHubs = await Github.find();
        for (git of gitHubs) {
            const details = await gitApi.getGitUserDetails(git.gitUser);
            git._doc = {
                ...git._doc,
                ...details
            }
            await Github.findByIdAndUpdate(git._id, git)
            console.log(git)
        }

        return gitHubs
    } catch (error) {
        throw {
            status: 500,
            message: "No se ha podido actualizar bd detalles de usuario de Github"
        }
    }
}

const updateUserRepos = async () => {
    try {
        const gitHubs = await Github.find();
        for (git of gitHubs) {
            const repos = await gitApi.getGitReposByUser(git.gitUser);
            git.respositories = repos;
            git = await Github.findByIdAndUpdate(git._id, git)

        }
        return gitHubs
    } catch (error) {
        throw {
            status: 500,
            message: "No se ha podido actualizar bd repositories de usuario de Github"
        }
    }
}


/********************************** */
module.exports = {
    updateUserDetails,
    updateUserRepos

}