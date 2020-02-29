import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,REMOVE_ALL_TODO} from './actions';
import { tassign } from 'tassign'; 
import {ITodo} from './todo'
export interface IAppState{
    todos:ITodo[];
    lastUpdate:Date;
}

export const INITIAL_STATE:IAppState={
    todos:[],
    lastUpdate:new Date
}

export function rootReducer(state:IAppState=INITIAL_STATE,action):IAppState{
    switch(action.type){
        case ADD_TODO:
            action.todo.id=state.todos.length+1;
            return Object.assign({},state,{
                todos:state.todos.concat(Object.assign({},action.todo)),
                lastUpdate:new Date
            })
            // return {
            //     todos:[Object.assign({},action.payload.todo),
            //     ...state.todos],
            //     lastUpdate:new Date()
            // }
        case TOGGLE_TODO:
            let todo=state.todos.find(t=>t.id===action.id)
            let index=state.todos.indexOf(todo);
            return Object.assign({},state,{
                todos:[
                    ...state.todos.slice(0,index),
                    Object.assign({},todo,{isCompleted:!todo.isCompleted}),
                    ...state.todos.slice(index+1)
                ],
                lastUpdate:new Date
            })
        
        case REMOVE_TODO:
            return Object.assign({},state,{
                todos:state.todos.filter(t => t.id!==action.id),
                lastUpdate:new Date
            })

        case REMOVE_ALL_TODO:
            return Object.assign({},state,{
                todos:[],
                lastUpdate:new Date 
            })
            //return (Object.assign({},state,{todos:state.todos.concat("1"),lastUpdate:new Date()}))
    }
    return state;
}