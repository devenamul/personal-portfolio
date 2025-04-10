import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    contacts: [],
    loading: false,  
    message: null,
    error: null  
};

// Create Slice
const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
      },
});

// export selector
export const getAllContactData = (state) => state.contact;
export default contactSlice.reducer;
