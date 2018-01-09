import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';

// 先import我們的TodoListService
import { TodoListService } from './todo-list.service';
import { TodoDonePipe } from './todo-done.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoAppComponent
  ],
  declarations: [
    TodoAppComponent,
    AddFormComponent,
    TodoItemsComponent,
    TodoDonePipe
  ],
  providers: [TodoListService]
})
export class TodoAppModule { }
