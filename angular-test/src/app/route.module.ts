import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { MyTestComponent } from './my-test/my-test.component';

const routes: Routes = [
    { path: '', redirectTo: '/simple', pathMatch: 'full' },
    { path: 'simple', component: SimpleTestComponent },
    { path: 'test/:myParam', component: MyTestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }