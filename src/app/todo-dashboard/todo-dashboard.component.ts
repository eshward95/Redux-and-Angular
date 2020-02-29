import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import {select ,NgRedux} from 'ng2-redux';
import {IAppState} from '../store'
import {REMOVE_ALL_TODO} from '../actions'
 
@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {

  @select()lastUpdate;
  @select()todos;
  // Read the comment in TodoService
  constructor(private service: TodoService,private ngRedux:NgRedux<IAppState>) { 
  }
  clearTodos() {
    this.ngRedux.dispatch({type:REMOVE_ALL_TODO});
    // this.service.clearTodos();
  }
}
