import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { AddmissionDetailsComponent } from './addmission-details/addmission-details.component';
import { CoachComponent } from './coach/coach.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { HscComponent } from './hsc/hsc.component';
import { ClassComponent } from './class/class.component';
import { CareerComponent } from './career/career.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddmissionComponent,
    AddmissionDetailsComponent,
    CoachComponent,
    AllCourseComponent,
    HscComponent,
    ClassComponent,
    CareerComponent,
    PrivacyComponent,
    TermsComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
