import developerApi from '../../api/developerApi';
import { setDevelopers, setLists, setRepositories, setTweets, setVideos, clearVideos, clearLists } from './developerSlice'

export const loadDevelopers = () => {
    return async (dispatch) => {
        const { data } = await developerApi.get();
        dispatch(setDevelopers(data.developers))
    }
}
export const loadVideosAndList = (developer_id = "") => {
    return async (dispatch) => {
        const { data } = await developerApi.get(`/youtube/list-videos/${developer_id}`);
        dispatch(setVideos(data.videosAndList.videos))
        dispatch(setLists(data.videosAndList.lists))
    }
}

export const loadRespositories = (gitHub_id = "") => {
    return async (dispatch) => {
        const { data } = await developerApi.get('/git-hub/repositories');
        dispatch(setRepositories(data.repos))
    }
}

export const loadTweets = (Twitter_id) => {
    return async (dispatch) => {
        const { data } = await developerApi.get(`/twitter/${Twitter_id}`)
        dispatch(setTweets(data.tweets))
    }
}
export const searchData = (searchIn, searchText) => {
    return async (dispatch) => {

        if (searchIn.youtube === true) {
            const { data } = await developerApi.get(`/search/youtube/?video=${searchText}&list=${searchText}`);
            console.log(data);
            if (data.videos) {
                dispatch(setVideos(data.videos))
            } else {
                dispatch(clearVideos())
            }
            if (data.lists) {
                dispatch(setLists(data.lists))
            } else {
                dispatch(clearLists())
            }

        }
        if (searchIn.github === true){
            const { data } = await developerApi.get(`/git-hub/repositories/search/?repo=${searchText}`);
            console.log(data)
        }

    }

}