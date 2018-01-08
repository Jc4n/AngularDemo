import { TodoItem } from './../shared/todo-item';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() items: TodoItem[];
  @Output() delTodoItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  chkItem(item: TodoItem) {
    item.done = !item.done;
  }
  delItem(id:number){
    this.delTodoItem.emit(id);
  }
}
