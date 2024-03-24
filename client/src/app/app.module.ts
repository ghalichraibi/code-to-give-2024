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
import { ResidentsComponent } from './components/residents/residents.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { ChatComponent } from './components/chat/chat.component';
import { ResidentFormComponent } from './resident-form/resident-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignificantPersonFormComponent } from './significant-person-form/significant-person-form.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { EventFormComponent } from './event-form/event-form.component';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [AppComponent, MainPageComponent, AboutPageComponent, CaregiverDashboardComponent, ResidentPortalComponent, PersonalInformationComponent, CalendarComponent, ObjectivesComponent, HeaderComponent, ResourcesComponent, ResidentsComponent, StatisticsComponent, AuditTrailComponent, ChatComponent, ResidentFormComponent, SignificantPersonFormComponent, PlanFormComponent, EventFormComponent],
    imports: [AppMaterialModule, AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
