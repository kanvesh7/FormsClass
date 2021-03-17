import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  @ViewChild('f') courseForm: NgForm;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('COurse Name is:' + form.value.courseName);
    console.log('COurse Description is:' + form.value.courseDesc);
    console.log('COurse amount is:' + this.courseForm.value.courseAmount);
  }
}
