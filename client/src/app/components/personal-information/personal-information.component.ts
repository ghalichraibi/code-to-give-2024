import { Component } from '@angular/core';
import { residentStub, caregiverStub } from '@common/stubs/residentStub';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
    currentResident = residentStub;
    currentCaregiver = caregiverStub;

    displayedInformation = [
      { label: 'Last name', value: this.currentResident.lastName },
      { label: 'First name', value: this.currentResident.firstName },
      { label: 'Birth Date', value: this.currentResident.birthDate.toLocaleDateString() },
      { label: 'Place of accomodation', value: this.currentResident.currentLodging },
      { label: 'Immigration Status', value: this.currentResident.immigrationStatus },
      { label: 'Number of children', value: this.currentResident.numberOfChildren },
      { label: 'Issues', value: this.currentResident.issues },
      { label: 'Monthly income', value: this.currentResident.monthlyIncome + '$'},
      { label: 'Native', value: this.currentResident.isIndigenous? 'Yes': 'No' },
      { label: 'Veteran', value: this.currentResident.isVeteran? 'Yes' : 'No' }
    ];
    contactDetails = [
      {label: 'Email', value: this.currentResident.email},
      {label: 'Phone Number', value: this.currentResident.phoneNumber},
      {label: 'Borough', value: this.currentResident.borough}
    ];

    caregiverDetails = [
      {label: 'full name', value: this.currentCaregiver.firstName +' '+  this.currentCaregiver.lastName},
      {label: 'Email', value: this.currentCaregiver.email},
      {label: 'Phone Number', value: this.currentCaregiver.phoneNumber}
    ];
}
