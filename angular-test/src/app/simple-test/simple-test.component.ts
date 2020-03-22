import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-test',
  templateUrl: './simple-test.component.html',
  styleUrls: ['./simple-test.component.css']
})
export class SimpleTestComponent implements OnInit {

  @Output('myEvent')
  clickEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  raise(e: any) {
    this.clickEvent.emit(e);
  }

  stus = [
    {
      name: 'zhangsan',
      age: '20',
      address: 'China Shanghai'
    },
    {
      name: 'lisi',
      age: '20',
      address: 'England london'
    },
    {
      name: 'wangwu',
      age: '20',
      address: 'America NewYork'
    },
    {
      name: 'zhangsan2',
      age: '20',
      address: 'China Xian'
    },
    {
      name: 'zhangsan3',
      age: '20',
      address: 'China Hangzhou'
    },
  ];

  isShow=true;

  compType;

  stu=null;
}
