import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '@app/pages/about-page/about-page.component';
import { CaregiverDashboardComponent } from '@app/pages/caregiver-dashboard/caregiver-dashboard.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { ResidentPortalComponent } from '@app/pages/resident-portal/resident-portal.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'caregiver', component: CaregiverDashboardComponent},
    { path: 'resident', component: ResidentPortalComponent},
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
