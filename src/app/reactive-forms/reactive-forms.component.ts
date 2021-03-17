import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { coursevalue } from './coursevalue';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  courseForm: FormGroup;
  coursevalues: coursevalue;

  constructor() {}

  ngOnInit(): void {
    this.coursevalues = new coursevalue();
    this.initForm();
  }

  //Initialize the form
  private initForm() {
    this.courseForm = new FormGroup({
      courseName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(200),
      ]),
      courseDesc: new FormControl(null),
      timeforCourse: new FormControl(1),
    });

    //this.courseForm.value.courseName = this.coursevalues.courseName;
  }
  submitDetails() {
    this.coursevalues.courseName = this.courseForm.value.courseName;
    console.log(this.courseForm.value.courseName);
  }
}
