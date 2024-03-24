import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  inputData: any[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.dataService.getFormData().subscribe(data => {
      this.inputData = data.inputs;
      this.inputData.forEach(input => {
        this.form.addControl(input.label, this.fb.control(''));
      });
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}