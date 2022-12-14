import axios from "axios";


const addAnswersUrl=`http://localhost:8080/api/answers/addAns`
const getQuizAnswerUrl= `http://localhost:8080/api/answers`


export const addAnswer = async (answer)=>{
    
    const users= JSON.parse(sessionStorage.getItem('users'))
    
    if(users.token){
        console.log(users.token);
        return await axios.post(`${addAnswersUrl}/${answer.qid}`, {answer: answer.answer},{ headers:{authorization:`Bearer ${users.token}`}})     

    }
    
}

export const getQuizAnsw= async(questionId)=>{
    const response = await axios.get(`${getQuizAnswerUrl}/${questionId}`)
    // console.log(response);
    return response
}

