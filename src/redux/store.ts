import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { loaderSlice } from "./loader";


const store = configureStore({

    reducer : {
        users : userSlice.reducer,
        loader : loaderSlice.reducer
    }
})

export default store;