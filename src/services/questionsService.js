import axios from "axios"


const askQuizUrl= `http://localhost:8080/api/questions/addQuiz`
const getQuiz= `http://localhost:8080/api/questions`
const deleteQuestionURL = `http://localhost:8080/api/questions/deleteQuiz`
const searchQuestionUrl = `http://localhost:8080/api/questions/search`

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

export const deleteQuestion = async(id)=>{
    const users= JSON.parse(sessionStorage.getItem('users'))
    const response =await axios.delete(`${deleteQuestionURL}/${id}`, {headers: {authorization: `Bearer ${users.token}`}})
    return response
}

export const searchQuestion= async(details)=>{
    const response = await axios.get(`${searchQuestionUrl}?search=${details.search}`)

    return response
}
