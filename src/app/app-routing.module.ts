import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addmission', component: AddmissionComponent },
  { path: 'addmissionDetails', component: AddmissionDetailsComponent },
  { path: 'coach', component: CoachComponent},
  { path: 'allCourse', component: AllCourseComponent},
  { path: 'hsc', component: HscComponent},
  { path: 'class', component: ClassComponent},
  { path: 'career', component: CareerComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
