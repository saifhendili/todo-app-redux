import {ADD_TODO,CHANGE_HANDLER, COMPLETE,DELETE_TODOS
} from './actiontype'
export const addToDo=text=>({
    type:ADD_TODO,
    text
})
export const changeHandler=e=>({
    type:CHANGE_HANDLER,
    e

})
export const complete = i=>({
    type:COMPLETE,
    i
    
})
export const deletetodos=i=>({
    type:DELETE_TODOS,
    i
})