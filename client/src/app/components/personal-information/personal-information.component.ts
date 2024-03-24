import { Component } from '@angular/core';
import { residentStub } from '@common/stubs/residentStub';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
    currentResident = residentStub;
    displayedInformation = [
      { label: 'Nom', value: this.currentResident.lastName },
      { label: 'Prénom', value: this.currentResident.firstName },
      { label: 'Date de naissance', value: this.currentResident.birthDate.toLocaleDateString() },
      { label: 'Lieu d\'hébergement', value: this.currentResident.currentLodging },
      { label: 'Statut d\'immigration', value: this.currentResident.immigrationStatus },
      { label: 'Autochtone', value: this.currentResident.isIndigenous },
      { label: 'Ancien combattant', value: this.currentResident.isVeteran },
      { label: 'Nombre d\'enfants', value: this.currentResident.numberOfChildren },
      { label: 'Enjeux', value: this.currentResident.issues },
      { label: 'Revenu mensuel', value: this.currentResident.monthlyIncome }
    ];
    contactDetails = [
      {label: 'Courriel', value: this.currentResident.email},
      {label: 'Téléphone', value: this.currentResident.phoneNumber},
      {label: 'Adresse', value: this.currentResident.borough}
    ];

}
