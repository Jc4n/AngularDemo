import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  placeholderText = '請輸入代辦喔!';
  todoText = '';
  constructor() { }

  ngOnInit() {
  }
  addTodo() {
    console.log('輸入的文字是~~~:' + this.todoText);
  }
}
