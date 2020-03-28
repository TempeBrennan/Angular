import {
  Component, OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked,
  DoCheck, AfterViewChecked, AfterViewInit, ViewChild, ComponentFactoryResolver
} from '@angular/core';

import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'my-template',
  template: '<h1>Hi</h1>',
  styleUrls: ['./product-list.component.css']})
export class MyComponent
{

}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit,
  DoCheck, AfterViewChecked, AfterViewInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  aa = "This is value";
  products = products;

  myName = "pppChery";
  myName1 = "LiNing";

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  items = [{ id: 1, name: 'zhangsan' }, { id: 2, name: 'lisi' }, { id: 3, name: 'wangwu' }];

  trackByItems(index: number, item: Item): number {
    return item.id;
  }

  handler1() {
    this.items = [{ id: 1, name: 'zhangsan11111' }, { id: 2, name: 'lisi22222' }, { id: 3, name: 'wangwu3333' }];
  }


  handler2() {
    this.items = [{ id: 1, name: 'zhangsan' }, { id: 2, name: 'lisi' }, { id: 3, name: 'wangwu' }];
  }

  callPhone(v) {
    (window as any).my = v;
    console.log(v);
  }

  ngAfterViewInit(): void {
    console.log("**********app-product-list-ngAfterViewInit**************");
  }
  ngAfterViewChecked(): void {
    console.log("**********app-product-list-ngAfterViewChecked**************");
  }
  ngDoCheck(): void {
    console.log("**********app-product-list-ngDoCheck**************");
  }
  ngAfterContentInit(): void {
    console.log("**********app-product-list-ngAfterContentInit**************");
  }
  ngAfterContentChecked(): void {
    console.log("**********app-product-list-ngAfterContentChecked**************");
  }
  ngOnDestroy(): void {
    console.log("**********app-product-list-ngOnDestroy**************");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("**********app-product-list-ngOnChanges**************");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("**********app-product-list-ngOnInit**************");
  }

  show(name: string) {

  }

  @ViewChild(ProductAlertsComponent)
  private aa1;

  @ViewChild(AdDirective, { static: true }) 
  adHost: AdDirective;

  load() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyComponent);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}

export interface Item {
  id: number;
  name: string;
}