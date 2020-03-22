import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestParentChildService {

  constructor() { }

  private _message:string;

  setMessage(v:string){
    this._message=v;
  }

  getMessage(){
    return this._message;
  }
}
