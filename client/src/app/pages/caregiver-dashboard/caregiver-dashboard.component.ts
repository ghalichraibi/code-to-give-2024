import { Component, OnInit, OnDestroy } from '@angular/core';
import { CaregiverDashboardOptions } from '@app/enums/caregiver-dashboard-options.enum';

@Component({
  selector: 'app-caregiver-dashboard',
  templateUrl: './caregiver-dashboard.component.html',
  styleUrls: ['./caregiver-dashboard.component.scss']
})
export class CaregiverDashboardComponent implements OnInit, OnDestroy {
  caregiver: String;
  options : string[] = Object.keys(CaregiverDashboardOptions).map(key => CaregiverDashboardOptions[key as keyof typeof CaregiverDashboardOptions]);
  selectedOption: string = CaregiverDashboardOptions.Residents;
  selectedResident: any;

  onOpenChat(resident: any) {
    this.selectedResident = resident;
  }

  closeChat() {
    this.selectedResident = null;
  }

  selectOption(option: string) {
      this.selectedOption = option;
  };
  
  ngOnInit(): void {
    this.caregiver = "John Doe";
  }

  ngOnDestroy(): void {
  }

}
