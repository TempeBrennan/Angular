import { Component, ViewChild } from '@angular/core';
import { MyTestComponent } from './my-test/my-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  show(e:any){
    alert(e.target.id);
  }

  @ViewChild(MyTestComponent,null)
  private child;

  test(){
    this.child.show();
  }
}
