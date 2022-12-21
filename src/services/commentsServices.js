import axios from "axios"


const getCommentsURL= `http://localhost:8080/api/comments`
const addComentsURL= `http://localhost:8080/api/comments/addCom`

export const getComments= async(answerId)=>{
    const response =await axios.get(`${getCommentsURL}/${answerId}`)
    return response
}


export const addComments= async(answerId, comment)=>{
    const users =JSON.parse(sessionStorage.getItem('users'))

    if(users.token){
        return axios.post(`${addComentsURL}/${answerId}`, comment, {headers: {Authorization: `Bearer ${users.token}`}})
    }
}