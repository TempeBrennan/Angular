import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

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
      name: new FormControl('', Validators.required),
      address: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
      isStudent: new FormControl(),
      age: new FormControl('', [Validators.min(20), Validators.max(35)]),
      graduateDate: new FormControl('', [dateValidator(new Date('2020/03/04'), new Date('2020/04/05'))]),
      sex: new FormControl(),
      technicals: new FormArray([]),
      province: new FormControl(),
      hobby: new FormControl('', Validators.pattern('^[a-z0-9]{8,15}')),
      company: new FormGroup({
        first: new FormControl(),
        second: new FormControl(),
        third: new FormControl(),
      }),
    },{ validators: identityRevealedValidator });
  }

  ngOnInit() {
    this.data.forEach(i => (this.formGroup.controls.technicals as any).push(new FormControl(false)));
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

  get name() {
    return this.formGroup.get('name');
  }

  get address() {
    return this.formGroup.get('address');
  }

  get age() {
    return this.formGroup.get('age');
  }

  get graduateDate() {
    return this.formGroup.get('graduateDate');
  }

  get hobby() {
    return this.formGroup.get('hobby');
  }

}


export function dateValidator(min: Date, max: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    var cur = new Date(control.value);
    const result = cur >= min && cur <= max;
    return result ? null : { 'invalidDate': { value: cur }, 'date': { value: 'From TS' } };
  };
}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const address = control.get('address');
  return name && address && name.value === address.value ? { 'identityRevealed': true } : null;
};