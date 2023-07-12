import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassComponent } from './class/class.component';
import { AdmissionDetailsComponent } from './admission-details/admission-details.component';
import { AdmissionComponent } from './admission/admission.component';
import { OnlineClassComponent } from './online-class/online-class.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { CarrierComponent } from './carrier/carrier.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { CoachComponent } from './coach/coach.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    AdmissionDetailsComponent,
    AdmissionComponent,
    OnlineClassComponent,
    AllCourseComponent,
    CarrierComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent,
    PrivacyComponent,
    TermsAndConditionComponent,
    CoachComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
