
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk('user/getFeedData', async () => {
    try {
        // const response = await axios.get('http://localhost:4000/todos/', {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos/`, {
            withCredentials: true
        });
        console.log("All todos : ",response);
        return response.data.Todos;
    } catch (e) {
        return Promise.reject(e);
    }
});

const appConfigSlice = createSlice({
    name: "appConfigSlice",
    initialState: {
        isLoading: false,
        toastData: {},
        todoData: []
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        showToast: (state, action) => {
            state.toastData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.todoData = action.payload;
        })
    }
});




export default appConfigSlice.reducer;

export const { setLoading, showToast, setLoader,filterByStatus} = appConfigSlice.actions;
