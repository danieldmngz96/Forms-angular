import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('');
  emailField = new FormControl('');
  phoneField = new FormControl('');
  dateField = new FormControl('');
  numberField = new FormControl('');
  colorField = new FormControl("#000");

  categoryField = new FormControl('category-4');
  tagField = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value: string) => {
      console.log(value);
    });
    this.emailField.valueChanges.subscribe((value: string) => {
      console.log(value);
    })
  }
 getNameValue() {
  console.log(this.nameField.value);
 }
}
