import axios from "axios";
const passVoteUrl= `http://localhost:8080/api/answers/votes`


export const passVotes= async(answerId, userId, upVotes, downVote)=>{
    const users= JSON.parse(sessionStorage.getItem('users'))
    const response= await axios.post(`${passVoteUrl}/${answerId}`, userId, upVotes,downVote, {headers:{authorization:`Bearer ${users.token}`}})
    return response
}