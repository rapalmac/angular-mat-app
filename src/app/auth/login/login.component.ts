import { Component } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form:any = null;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      email: ["", {
        validators: [Validators.required],
        updateOn: "blur"
      }],
      password: ["", {
        validators: [Validators.required],
        updateOn: "blur"
      }]
    });
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

  isRequiredFieldInvalid(fieldName:string):boolean {
    let formControl = this.form.controls[fieldName];
    return formControl && formControl["errors"] && formControl.errors["required"];
  }

}
