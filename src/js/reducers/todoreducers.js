import{
    ADD_TODO,
    CHANGE_HANDLER,
    COMPLETE,
    DELETE_TODOS
} from '../actions/actiontype'
const stateliste ={
    task:'',
    tasklist:[],
    isComplete:[],
   
}
const reducer =(state = stateliste ,action)=>{
switch(action.type)
{
    case ADD_TODO :
        return state.task.trim() !== ""?{
            ...state,
            task: "",
            tasklist: [...state.tasklist, state.task],
            isComplete:[...state.isComplete, false],
        }: 
        { ...state}
        ;
    case CHANGE_HANDLER:
        return {...state ,task :action.e.target.value};
        case COMPLETE:
            let liste=[...state.isComplete]
            liste[action.i]=!state.isComplete[action.i]
            return {
...state,
isComplete:liste

            }
    case DELETE_TODOS:
        let remove=state.tasklist.filter((el,i)=>i!==action.i)
        
        let comp=state.isComplete.filter((el,i)=>i!==action.i)
        return{
            ...state,
            tasklist:remove,
            isComplete:comp
        }
        
}
return state;
}


export default reducer;