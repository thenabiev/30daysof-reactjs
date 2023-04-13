export const add=(value)=>{
    return {type:"ADD", payload:value}
}

export const reduce=(value)=>{
    return {type:"REDUCE", payload:value}
}