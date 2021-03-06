import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

// 先import我們的TodoListService
import { TodoListService } from './todo-list.service';
import { TodoDonePipe } from './todo-done.pipe';
import { BsButtonDirective } from './bs-button.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    TodoItemsComponent,
    TodoDonePipe,
    BsButtonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoListService], // 在providers中加入TodoListService
  bootstrap: [AppComponent]
})
export class AppModule { }
