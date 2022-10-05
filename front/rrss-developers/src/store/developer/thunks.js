import developerApi from '../../api/developerApi';
import { setDevelopers, setLists, setRepositories, setVideos } from './developerSlice'

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

export const loadRespositories = (gitHub_id = "")=> {
    return async (dispatch) =>{
        const { data } =  await developerApi.get('/git-hub/repositories');
        dispatch(setRepositories(data.repos))
    }
}