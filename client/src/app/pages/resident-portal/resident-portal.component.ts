import { Component } from '@angular/core';
import { ResidentPortalOptions } from '@app/enums/residentPortalOptions.enum';
// import { PersonalInformationComponent } from './personal-information/personal-information.component';

@Component({
  selector: 'app-resident-portal',
  templateUrl: './resident-portal.component.html',
  styleUrls: ['./resident-portal.component.scss']
})
export class ResidentPortalComponent {
    options : string[] = Object.keys(ResidentPortalOptions).map(key => ResidentPortalOptions[key as keyof typeof ResidentPortalOptions]);

    selectedOption: string = ResidentPortalOptions.PersonalInformation;

    selectOption(option: string) {
        this.selectedOption = option;
    };
}
