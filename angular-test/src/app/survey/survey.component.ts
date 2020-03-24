import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/^\d{4}$/)]],
    address: [''],
    hobby: [''],
    questions: this.fb.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      question2: ['', Validators.required],
      answer2: ['', Validators.required]
    }),
    tels: this.fb.array([this.fb.control('')])
  });

  constructor(private fb: FormBuilder) { }

  addTel() {
    this.telList.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get telList() {
    return this.form.get("tels") as FormArray;
  }

  get name() {
    return this.form.get('name');
  }

  ngOnInit() {
    // this.form.patchValue({
    //   name: 'zhangsan',
    //   address: 'England',
    //   questions: {
    //     question1: "What's your name?",
    //     answer1: 'My name is zhangsan'
    //   },
    //   tels: ['13023489283'],
    // });
  }

}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbiddenValue': { value: control.value } } : null;
  };
}