import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { TestEditorComponent } from './test-editor/test-editor.component';


const routes: Routes = [
  { path: 'test', component:TestEditorComponent },
  // { path: 'test/:myParam', component: MyTestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    TestEditorComponent
  ],
  imports: [
    BrowserModule,
    // other imports ...
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
