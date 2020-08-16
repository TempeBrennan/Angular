import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-self-child',
  templateUrl: './self-child.component.html',
  styleUrls: ['./self-child.component.css']
})
export class SelfChildComponent implements OnInit {

  constructor(public flower: FlowerService) { }

  ngOnInit(): void {
  }

}
