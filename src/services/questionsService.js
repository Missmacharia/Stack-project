import axios from "axios"


const askQuizUrl= `http://localhost:8080/api/questions/addQuiz`
const getQuiz= `http://localhost:8080/api/questions`


export const askQuestions = async (question)=>{
    
    const users= JSON.parse(sessionStorage.getItem('users'))
    
    if(users.token){
        console.log(users.token);
        return await axios.post(askQuizUrl, question,{ headers:{authorization:`Bearer ${users.token}`}})     

    }
    
}


export const getQuestion = async(id)=>{
    console.log(`${getQuiz}/${id}`);
    const response = await axios.get(`${getQuiz}/${id}`)
    return response
}
