import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    developers: [],
    videos:[],
    lists:[],
    repositories:[],
    activeDeveloper: null, // id_developer
}

export const developerSlice = createSlice({
    name: 'developer',
    initialState,
    reducers:{
        setDevelopers:(state, action)=>{
            state.developers = [...action.payload]
        },
        setActiveDeveloper:(state,action)=>{
            state.activeDeveloper=action.payload
        },
        setVideos:(state, action)=>{
            
            state.videos = [ ...action.payload]
        },
        setLists:(state,action)=>{
            state.lists =[...action.payload]
        },setRepositories:(state,action)=>{
            state.repositories = [...action.payload]
        }
    }
});

export const { 
    setDevelopers,
    setActiveDeveloper,
    setVideos,
    setLists,
    setRepositories
} = developerSlice.actions

export default developerSlice.reducer

