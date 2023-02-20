import { createSlice } from "@reduxjs/toolkit";
import { vacancies } from "../data/vacancy";


const initialState={
    vacancies:vacancies,
    searchTerm:''
}


export const WorkSlice=createSlice({
    name:"vacancies",
    initialState,
    reducers:{
        addNewVacancy(state, action){
            state.vacancies=[...state.vacancies, {id: Date.now(), ...action.payload, views:0, premium:false}]
        },
        removeVacancy(state, action){
            state.vacancies=state.vacancies.filter(x=>x.id!==action.payload.id)
        },
        setSearchTerm(state, action){
            state.searchTerm=action.payload
        },
        vip(state, action){

            state.vacancies=state.vacancies.map(vacancy=>{
                if(vacancy.id==parseInt(action.payload)){
                    return {...vacancy, premium:true}
                }
                return vacancy
            })
            
        }
    }
})


export default WorkSlice.reducer;

export const {addNewVacancy, removeVacancy, setSearchTerm, vip}=WorkSlice.actions