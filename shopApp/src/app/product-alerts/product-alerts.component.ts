import { Component, OnInit,OnChanges,OnDestroy,AfterContentInit,AfterContentChecked,
DoCheck,AfterViewChecked,AfterViewInit } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit,OnChanges,OnDestroy,AfterContentChecked,AfterContentInit,
DoCheck,AfterViewChecked,AfterViewInit
{
  @Input()
  product;

  @Input()
  name="lallal";

  @Output()
  notify = new EventEmitter();

  constructor() { }
  ngAfterViewInit(): void {
    console.log("**********product-alerts-ngAfterViewInit**************");
  }
  ngAfterViewChecked(): void {
    console.log("**********product-alerts-ngAfterViewChecked**************");
  }
  ngDoCheck(): void {
    console.log("**********product-alerts-ngDoCheck**************");
  }
  ngAfterContentInit(): void {
    console.log("**********product-alerts-ngAfterContentInit**************");
  }
  ngAfterContentChecked(): void {
    console.log("**********product-alerts-ngAfterContentChecked**************");
  }
  ngOnDestroy(): void {
    console.log("**********product-alerts-ngOnDestroy**************");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("**********product-alerts-ngOnChanges**************");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("**********product-alerts-ngOnInit**************");
  }

}
