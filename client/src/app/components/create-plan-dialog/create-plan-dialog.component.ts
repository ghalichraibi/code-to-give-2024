import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: 'app-create-plan-dialog',
  templateUrl: './create-plan-dialog.component.html',
  styleUrls: ['./create-plan-dialog.component.scss']
})
export class CreatePlanDialogComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];
  
  submit() {
    console.log("Submitting plan creation form");
  }
}
