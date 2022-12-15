const { createSlice } = require("@reduxjs/toolkit");



const counterSlice= createSlice({
    name: "counter",
    initialState:{
        count: 0
    },
    reducers:{
        incrementAction: (state)=>{
            state.count +=1
        }, 
        decrementAction: (state)=>{
            state.count -=1
        }
    }
})

export const {incrementAction, decrementAction}= counterSlice.actions

export default counterSlice.reducer