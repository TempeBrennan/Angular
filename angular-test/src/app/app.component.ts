import { Component, ViewChild } from '@angular/core';
import { MyTestComponent } from './my-test/my-test.component';
import { TestParentChildService } from './test-parent-child.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestParentChildService]
})
export class AppComponent {
  title = 'angular-test';

  show(e:any){
    alert(e.target.id);
  }

  @ViewChild(MyTestComponent,null)
  private child;

  test(){
    alert(`Now child set message is ${this.service.getMessage()}`);
  }

  constructor(private service: TestParentChildService){}
}
