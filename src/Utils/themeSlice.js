import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"theme",
    initialState:{
        isTheme:true,
    },
    reducers:{
         toogleTheme:(state)=>{
            state.isTheme=!state.isTheme
         },

    },
});

export const{toogleTheme}=themeSlice.actions;
export default themeSlice.reducer;