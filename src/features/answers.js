import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAnswer, getQuizAnsw, passVotes } from "../services/answersService";


export const getAnswersAction = createAsyncThunk(
  "fetchquiz/answer-one",
  async (answer, thunkAPI) => {
    try {
      const res = await getQuizAnsw(answer);
      console.log(res.data)
       return res.data;
    } catch (error) {
        thunkAPI.rejectWithValue({
            error: error.message
        })
    }
  }
);

export const addAnswerAction = createAsyncThunk(
  "post/answer-one",
  async (answer, thunkAPI) => {
    try {
      const response = await addAnswer(answer);
      return { answer: response };
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);


export const passVoteAction = createAsyncThunk(
  "passAnswerVote",
  async(upVote, downVote, thunkAPI)=>{
    try {
      const response = await passVotes(upVote, downVote)
      return {upvote: response, downVote: response}
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message
      })
    }
  }
)

const initialState = {
  answers: [],
  loading: false,
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAnswersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAnswersAction.fulfilled, (state, action) => {
      state.answers = action.payload;
      state.loading = false;
    });
    builder.addCase(addAnswerAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addAnswerAction.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export default answersSlice.reducer;
