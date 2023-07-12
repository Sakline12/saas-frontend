import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path: 'class',
    component:ClassComponent,
  },
  {
    path: 'admissionDetails',
    component:AdmissionDetailsComponent,
  },
  {
    path: 'admission',
    component:AdmissionComponent,
  },
  {
    path: 'onlineClass',
    component:OnlineClassComponent,
  },
  {
    path: 'allCourse',
    component:AllCourseComponent,
  },
  {
    path: 'carrier',
    component:CarrierComponent,
  },
  {
    path: 'faq',
    component:FaqComponent,
  },
  {
    path: 'privacy',
    component:PrivacyComponent,
  },
  {
    path: 'tc',
    component:TermsAndConditionComponent,
  },
  {
    path: 'coach',
    component:CoachComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
