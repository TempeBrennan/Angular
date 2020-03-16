import { Component, Injector } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { PopupService } from './custom-element/popup.service';
import { PopupComponent } from './custom-element/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  message = 'aaa';

  constructor(injector: Injector, public popup: PopupService) {

    // 记得用 ng add @angular/elements，否则Edge不支持

    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}