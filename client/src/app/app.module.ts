import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { AppComponent } from '@app/pages/app/app.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ResidentPortalComponent } from './pages/resident-portal/resident-portal.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';
import { HeaderComponent } from './components/header/header.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CaregiverDashboardComponent } from './pages/caregiver-dashboard/caregiver-dashboard.component';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [AppComponent, MainPageComponent, AboutPageComponent, CaregiverDashboardComponent, ResidentPortalComponent, PersonalInformationComponent, CalendarComponent, ObjectivesComponent, HeaderComponent, ResourcesComponent],
    imports: [AppMaterialModule, AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
