import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RskComponent } from './components/rsk/rsk.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { ChildComponent } from './components/child/child.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CourseNameComponent } from './components/course-name/course-name.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { CourseDurationComponent } from './components/course-duration/course-duration.component';
import { CourseTutorComponent } from './components/course-tutor/course-tutor.component';
import { MyParentComponent } from './components/my-parent/my-parent.component';
import { MyChildComponent } from './components/my-child/my-child.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component'
import { AuthService } from './services/auth.service';
import { HomePageService } from './services/home-page.service';
import { LoginErrorComponent } from './components/login-error/login-error.component';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CartComponent } from './components/cart/cart.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { MobileService } from './services/mobile.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { AdminRegisterService } from './services/admin-register.service';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminTokenInterceptorService } from './services/admin-token-interceptor.service';
import { AdminMobilesComponent } from './components/admin/admin-mobiles/admin-mobiles.component';
import { InsertMobileService } from './services/insert-mobile.service';
import { NotificationService } from './services/notification.service';
import { MobileListComponent } from './components/admin/mobile-list/mobile-list.component';
import { GetMobilesService } from './services/get-mobiles.service';



@NgModule({
  declarations: [
    AppComponent,
    RskComponent,
    InterpolationComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    ChildComponent,
    PipesComponent,
    CourseNameComponent,
    CourseDetailsComponent,
    PageNotFoundComponent,
    SelectedCourseComponent,
    CourseDurationComponent,
    CourseTutorComponent,
    MyParentComponent,
    MyChildComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    LoginErrorComponent,
    CartComponent,
    MobilesComponent,
    CheckoutComponent,
    AdminRegisterComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminMobilesComponent,
    MobileListComponent

  ],
  entryComponents:[LoginErrorComponent, AdminMobilesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AuthService, HomePageService, AuthGuard,MobileService, AdminRegisterService, InsertMobileService,NotificationService,GetMobilesService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AdminTokenInterceptorService,
    multi: true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
