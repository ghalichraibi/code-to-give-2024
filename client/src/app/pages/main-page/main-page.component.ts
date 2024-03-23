import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnDestroy {
    selectedOption: string = 'caregiver';
    private loginSubscription: Subscription | null = null;

    constructor(private router: Router) {}

    onLogin() {
        switch (this.selectedOption) {
            case 'caregiver':
                this.router.navigate(['/caregiver']);
                break;
            case 'resident':
                this.router.navigate(['/resident']);
                break;
            case 'admin':
                this.router.navigate(['/admin']);
                break;
        }
    }

    ngOnDestroy() {
        this.loginSubscription?.unsubscribe();
    }
}