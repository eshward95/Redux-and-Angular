import { BrowserModule } from '@angular/platform-browser';
import { NgModule,isDevMode } from '@angular/core';
import { NgRedux, NgReduxModule,DevToolsExtension} from 'ng2-redux';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux:NgRedux<IAppState>,
              devTools:DevToolsExtension
    ) {
      let enhancer=isDevMode()?[devTools.enhancer() ]:[];
    ngRedux.configureStore(rootReducer,INITIAL_STATE,[],enhancer)
    
  }
 }
