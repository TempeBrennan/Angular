import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestParentChildService } from '../test-parent-child.service';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {

  constructor(private route: ActivatedRoute,private serice:TestParentChildService) { }

  ngOnInit() {
  }

  myPageId = this.route.snapshot.paramMap.get('myParam');

  show() {
    alert('This is my -test component');
  }

  message;

  addMessage() {
    this.serice.setMessage(this.message);
  }

}
