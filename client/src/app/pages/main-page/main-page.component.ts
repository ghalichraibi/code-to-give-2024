import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnDestroy {
    selectedOption: string = 'caregiver';
    private loginSubscription: Subscription | null = null;

    onLogin() {
    }

    ngOnDestroy() {
        this.loginSubscription?.unsubscribe();
    }
}