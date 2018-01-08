import { TodoItem } from './../shared/todo-item';
import { Component, OnInit } from '@angular/core';
import { TodoListService } from './../todo-list.service'; 

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  constructor(private todoListService: TodoListService) { } 
   // 在ngOnInit()中，要求TodoListService從後端抓取資料
  ngOnInit() {
    this.todoListService.loadTodoList();
  }

  getTodoList() {
    return this.todoListService.getTodoList();
  }

  itemClick(item: TodoItem) {
    this.todoListService.chkItem(item);
  }

  delete(id: number) {
    this.todoListService.deleteItem(id);
  }
}
