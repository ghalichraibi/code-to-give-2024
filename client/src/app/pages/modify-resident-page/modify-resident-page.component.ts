import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from '@app/services/communication.service';
import { Resident } from '@common/interfaces/stakeholders/users';

@Component({
  selector: 'app-modify-resident-page',
  templateUrl: './modify-resident-page.component.html',
  styleUrls: ['./modify-resident-page.component.scss']
})
export class ModifyResidentPageComponent {
  residentId: string;
  resident: Resident;
  constructor(private communicationService: CommunicationService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.residentId = this.route.snapshot.paramMap.get('id') || '';
    this.communicationService.getUserById(this.residentId).subscribe((response) => {
      if (response.body && response.body.role=='resident') {
        this.resident = response.body;
        console.log(this.resident);

      }
    });

  }

  openDocument(document: string) {
    console.log('Opened DOC!');
  }
}
