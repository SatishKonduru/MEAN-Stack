import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminMobilesComponent } from './components/admin/admin-mobiles/admin-mobiles.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { MobileListComponent } from './components/admin/mobile-list/mobile-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseDurationComponent } from './components/course-duration/course-duration.component';
import { CourseNameComponent } from './components/course-name/course-name.component';
import { CourseTutorComponent } from './components/course-tutor/course-tutor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { LoginComponent } from './components/login/login.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'mobiles',
    component: MobilesComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path:'admin/register',
    component: AdminRegisterComponent
  },
  {
    path: 'admin/adminLogin',
    component:AdminLoginComponent
  },
  {
    path: 'admin/adminDashboard',
    component:AdminDashboardComponent,
    canActivate:[AdminAuthGuard]
  },
  {
    path:'admin/adminMobiles',
    component: AdminMobilesComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin/mobiles-list',
    component: MobileListComponent
  },
{
  path:'**',
  component: PageNotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
