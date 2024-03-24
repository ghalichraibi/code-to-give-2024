import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {
  @Output() openChatRequest = new EventEmitter<any>();

  residents: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchResidents();
  }

  fetchResidents() {
    this.residents = [
      { name: 'John Doe', age: 65, gender: 'Male' },
      { name: 'Jane Smith', age: 72, gender: 'Female' },
    ];
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
