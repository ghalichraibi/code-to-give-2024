import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreatePlanDialogComponent } from '@app/components/create-plan-dialog/create-plan-dialog.component';
import { CommunicationService } from '@app/services/communication.service';
import { InterventionPlan } from '@common/interfaces/documents/intervention-plan.interface';
import { Resident } from '@common/interfaces/stakeholders/users';

@Component({
  selector: 'app-intervention-plan',
  templateUrl: './intervention-plan.component.html',
  styleUrls: ['./intervention-plan.component.scss']
})
export class InterventionPlanComponent {

  constructor(private communicationService: CommunicationService, private route: ActivatedRoute, private matDialog: MatDialog){}

  resident: Resident;
  residentId: string;
  plan: InterventionPlan;

  deletePlan(plan: InterventionPlan) {
    this.communicationService.deletePlan(this.residentId).subscribe(() => {
    // Do something? No...?
    });
  }

  modifyPlan(plan: InterventionPlan) {
    this.matDialog
    .open(CreatePlanDialogComponent)
    .afterClosed()
    .subscribe(() => {
      this.communicationService.updatePlan(this.residentId, plan).subscribe(() => {
        this.communicationService.getPlans().subscribe((response) => {
          response.forEach((plan) => {
            if (plan.resident == this.residentId) {
              this.plan = plan;
            }
          });
        });
      });
    });
  }
  ngOnInit(): void {
    this.residentId = this.route.snapshot.paramMap.get('id') || '';
    this.communicationService.getPlans().subscribe((response) => {
      response.forEach((plan) => {
        if (plan.resident == this.residentId) {
          this.plan = plan;
        }
      });
    });
    this.communicationService.getUserById(this.residentId).subscribe((response) => {
      if (response.body && response.body.role=='resident') {
        this.resident = response.body;
      }
    });
  }
}
