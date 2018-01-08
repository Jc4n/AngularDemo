import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'welcome!!!';
  constructor() { }

  ngOnInit() {
  }
  getDate() {
    return (new Date());
  }
  getBlueClass() {
    // 這裡可以用程式動態決定要回傳字串、陣列或物件
    return 'blue';
  }
}
