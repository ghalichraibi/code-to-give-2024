import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommunicationService } from '@app/services/communication.service';
import { InterventionPlan } from '@common/interfaces/documents/intervention-plan.interface';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { PlanCreationFormBuilder } from './plan-creation-form-builder';

@Component({
  selector: 'app-create-plan-dialog',
  templateUrl: './create-plan-dialog.component.html',
  styleUrls: ['./create-plan-dialog.component.scss']
})
export class CreatePlanDialogComponent {
  constructor(private communicationService: CommunicationService, private dialogRef: MatDialogRef<CreatePlanDialogComponent>) 
  {
    this.buildForm();
  }
  form = new FormGroup({});
  model: InterventionPlan
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

  async buildForm() {
    const residentFormBuilder = new PlanCreationFormBuilder(
      this.communicationService
    );
    this.fields = [
      {
        type: "stepper",
        fieldGroup: (await residentFormBuilder.buildForm()) as any,
      },
    ];
  }
  submit() {
    this.communicationService.createPlan(this.model).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
    this.dialogRef.close();
  }
}
