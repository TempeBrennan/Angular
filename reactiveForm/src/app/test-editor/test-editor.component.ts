import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-test-editor',
  templateUrl: './test-editor.component.html',
  styleUrls: ['./test-editor.component.css']
})
export class TestEditorComponent implements OnInit {

  public formGroup: FormGroup;
  data = ['JavaScipt', 'HTML', 'CSS', 'TypeScript'];
  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      isStudent: new FormControl(),
      sex: new FormControl(),
      technicals: new FormArray([]),
      province:new FormControl(),
      hobby: new FormControl(),
      company: new FormGroup({
        first: new FormControl(),
        second: new FormControl(),
        third: new FormControl(),
      }),
    })
  }

  ngOnInit() {
    this.data.forEach(i=>(this.formGroup.controls.technicals as any).push(new FormControl(false)));
  }

  public get arr() {
    return (this.formGroup.controls.technicals as any).controls;
  }

  setValue() {
    this.formGroup.setValue(
      {
        name: 'zhangsan',
        address: 'xian',
        hobby: 'sing and sung',
        company:
          { first: 'aa', second: 'grapecity', third: 'ss' }
      })
  }

  patchValue() {
    this.formGroup.patchValue({ name: 'lisi', company: { second: 'grapecityUS.' } });
  }

  getControl() {
    var a = this.formGroup.get('hobby');
    console.log(a.value);
    a.setValue('test for aaa');
  }

  ngSubmit() {
    console.log(this.formGroup.value);
  }

  save() {
    console.log(this.formGroup.value);
  }

  reset() {
    this.formGroup.reset();
  }

}
