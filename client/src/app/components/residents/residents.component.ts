import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommunicationService } from '@app/services/communication.service';
import { Resident } from '@common/interfaces/stakeholders/users';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {
  @Output() openChatRequest = new EventEmitter<any>();
  residents: Resident[] = [];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.fetchResidents();
  }

  fetchResidents() {
    this.communicationService.getAllResidents().subscribe((response) => {
      if (!response.body) return;
      this.residents = response.body;
    });
  }

  openChat(resident: any) {
    this.openChatRequest.emit(resident);
  }

  modifyInfo(resident: any) {
    console.log('Modifying info of resident:', resident);
  }

  viewDocuments(resident: any) {
    console.log('Viewing documents of resident:', resident);
  }

  getAgeFromBirthDate(birthDate: string) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  }
}
