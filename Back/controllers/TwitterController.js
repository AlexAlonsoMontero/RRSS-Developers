const TwitterServices = require('../services/TwitterServices');

const updateTwitter = async(request, response)=>{
    try {
            await TwitterServices.updateUser();
            const tweetsText = await TwitterServices.updateTweets();
            response
                .status(200)
                .send({
                    tweetUserInfo : tweetsText
                })
    } catch (error) {
        response
            .status( error?.code || 500)
            .send( error?.message || 'No se ha podido actualizar los datos de twitter')
    }
}

module.exports = {
    updateTwitter
}