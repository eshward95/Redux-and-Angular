import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgRedux, select } from 'ng2-redux';
import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from '../actions';
import { IAppState } from '../store';
import {ITodo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select()todos;
  @select()lastupdate;

  // Read the comment in TodoService
  constructor(private service: TodoService,private ngRedux:NgRedux<IAppState>) { 
  }
model:ITodo={
  id:0,
  description:"",
  responsible:"",
  priority:"low",
  isCompleted:false
}
  onSubmit( ) {
    // if (!input.value) return; 
    // let action={type:ADD_TODO,payload:{todo:this.model}}
    // console.log(action.payload)
    // this.ngRedux.dispatch(action);
    //this.service.addTodo(input.value);
    // console.log(this.model)
    this.ngRedux.dispatch({type:ADD_TODO,todo:this.model})
  }

  toggleTodo(todo) {
    console.log(todo);
    this.ngRedux.dispatch({type:TOGGLE_TODO,id:todo.id})
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type:REMOVE_TODO,id:todo.id})
  }
}
