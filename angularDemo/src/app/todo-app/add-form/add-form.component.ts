import { Component, OnInit  } from '@angular/core';
import { TodoListService } from './../todo-list.service'; 

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  constructor(private todoListService: TodoListService) { } 

  placeholderText = '請輸入代辦喔!';
  todoText = '';

  ngOnInit() {
  }
  addTodo($event: MouseEvent) {
    this.todoListService.addTodo(this.todoText);
  }
}
