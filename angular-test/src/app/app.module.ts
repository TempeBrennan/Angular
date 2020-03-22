import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { MyTestComponent } from './my-test/my-test.component';
import { AppRoutingModule } from './route.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTestComponent,
    MyTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
