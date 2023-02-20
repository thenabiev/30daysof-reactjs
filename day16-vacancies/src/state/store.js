import { configureStore } from "@reduxjs/toolkit";
import  LoginSlice  from "./loginSlice";

import  WorkSlice  from "./workSlice";

export const store=configureStore({
    reducer:{
        vacancies: WorkSlice,
        login: LoginSlice
    }
})