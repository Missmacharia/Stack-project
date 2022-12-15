import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../../firebaseconfig";

export const addProfileAction = createAsyncThunk(
  "add/profile-one",
  async (newProfile, thunkAPI) => {
    try {
      const profileRef = collection(firestoreDb, "profile");
      await addDoc(profileRef, newProfile);
      return {};
    } catch (error) {
      thunkAPI.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const fetchProfileAction =
  ("fetch/profile",
  async (args, thunkAPI) => {
    try {
      const profileRef = collection(firestoreDb, "profile");
      const docsSnap = await getDocs(profileRef);
      let profile=[]
      docsSnap.forEach((docs) => {
        const data = docs.data();
        profile.push({ id: docs.id, ...data });
      });
      return {
        profile
      }
    } catch (error) {
        thunkAPI.rejectWithValue({
            error:error.meassage
        })

    }
  });

const initialState = {
  profile: [],
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addProfileAction.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export default profileSlice.reducer;
