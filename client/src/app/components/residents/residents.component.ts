import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommunicationService } from '@app/services/communication.service';
@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {
  @Output() openChatRequest = new EventEmitter<any>();
  residents: [] = [];

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.fetchResidents();
  }

  fetchResidents() {
    this.communicationService.getAllResidents().subscribe(residents) = > {

    }

      );
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
}
