import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const Apidata = createAsyncThunk("API/getData",async(arg,{rejectWithValue})=>{
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
    
    
  } catch (error) {
    rejectWithValue(error.response.data);
    
  }
})

const APISlice = createSlice({
  name:"API",
  initialState:{
    data:[],
    isSuccess:false,
    message:"",
    loading:false,
  },
  reducers: {},
  extraReducers: {
    [Apidata.pending]: (state,{payload})=>{
      state.loading=true;},

    [Apidata.fulfilled]: (state,{payload})=>{
      state.loading=false;
      state.data = payload.data;
      state.isSuccess = true;
    },
    [Apidata.rejected]: (state,{payload})=>{
      state.message=payload;
      state.loading=false;
      state.isSuccess=false;
    },

  }
})

export default APISlice;