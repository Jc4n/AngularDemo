import { Http } from '@angular/http'; // 我們要使用的Http
import 'rxjs/add/operator/toPromise'; // 幫助我們將RxJs轉為Promise
import { TodoItem } from '../shared/todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  // 原來的資料移到assets/todo-list.json裡面去了
  todoItems: TodoItem[];

  // 建構式注入Http
  constructor(private http: Http) { }
  // 使用http.get取得後端資料
  // http.get會回傳RxJS的Observable物件
  // 我們先用.toPromise()轉回我們會使用的ES6 Prmoise
  //並利用toPromise()轉成ES6的Promise
  loadTodoList() {
    this.http
      .get('/assets/todo-list.json')
      .toPromise()
      .then(response => {
        this.todoItems = response.json();
      });
  }
  getTodoList() {
    return this.todoItems;
  }

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  deleteItem(id: number) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== id);
  }

  chkItem(item: TodoItem) {
    item.done = !item.done;
  }
}
