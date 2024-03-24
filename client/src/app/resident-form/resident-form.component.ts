import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SignificantPerson } from '@common/interfaces/stakeholders/persons';

@Component({
  selector: 'app-resident-form',
  templateUrl: './resident-form.component.html',
  styleUrls: ['./resident-form.component.scss']
})
export class ResidentFormComponent implements OnInit {
  form: FormGroup;
  inputData: any[] = [];
  significantPersons: SignificantPerson[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}