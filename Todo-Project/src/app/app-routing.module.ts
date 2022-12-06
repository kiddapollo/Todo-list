import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCompletedComponent } from './todo-completed/todo-completed.component';
import { TodoWorkingComponent } from './todo-working/todo-working.component';

const routes: Routes = [
  {
    path: '',
    component: TodoWorkingComponent
  },
  {
    path: 'working',
    component: TodoWorkingComponent
  },
  {
    path: 'completed',
    component: TodoCompletedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
