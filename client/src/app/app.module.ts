import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "@app/modules/app-routing.module";
import { AppMaterialModule } from "@app/modules/material.module";
import { AppComponent } from "@app/pages/app/app.component";
import { MainPageComponent } from "@app/pages/main-page/main-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { ResidentPortalComponent } from "./pages/resident-portal/resident-portal.component";
import { PersonalInformationComponent } from "./components/personal-information/personal-information.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { ObjectivesComponent } from "./components/objectives/objectives.component";
import { HeaderComponent } from "./components/header/header.component";
import { ResourcesComponent } from "./components/resources/resources.component";
import { NgFor } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { CaregiverDashboardComponent } from "./pages/caregiver-dashboard/caregiver-dashboard.component";
import { ResidentsComponent } from "./components/residents/residents.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { AuditTrailComponent } from "./components/audit-trail/audit-trail.component";
import { ChatComponent } from "./components/chat/chat.component";
import { ResidentDocumentsComponent } from "./pages/resident-documents/resident-documents.component";
import { AdminPageComponent } from "./pages/admin-page/admin-page.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CreateResidentDialogComponent } from "./components/create-resident-dialog/create-resident-dialog.component";
import { MatStepperModule } from "@angular/material/stepper";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyFieldStepperComponent } from "./components/formly-field-stepper/formly-field-stepper.component";

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    CaregiverDashboardComponent,
    ResidentPortalComponent,
    PersonalInformationComponent,
    CalendarComponent,
    ObjectivesComponent,
    HeaderComponent,
    ResourcesComponent,
    ResidentsComponent,
    StatisticsComponent,
    AuditTrailComponent,
    ChatComponent,
    ResidentDocumentsComponent,
    AdminPageComponent,
    CreateResidentDialogComponent,
    FormlyFieldStepperComponent,
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgFor,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatStepperModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: "required", message: "This field is required" },
      ],
      types: [
        {
          name: "stepper",
          component: FormlyFieldStepperComponent,
          wrappers: [],
        },
        // {
        //   name: "repeat",
        //   component: RepeatTypeComponent,
        // },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
