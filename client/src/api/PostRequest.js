import axios from "axios"

const API = axios.create({baseURL : "https://hivehut-backend-lows.onrender.com"})

 export const getTimelinePosts = (id)=> API.get(`/posts/${id}/timeline`)
 export const likePost = (id, userId)=> API.put(`post/${id}/like`, {userId: userId})
