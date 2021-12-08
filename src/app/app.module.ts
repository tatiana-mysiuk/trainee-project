import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SearchComponent } from './courses-page/search/search.component';
import { AddCourseComponent } from './courses-page/add-course/add-course.component';
import { SingleCourseComponent } from './courses-page/single-course/single-course.component';
import { PaginationComponent } from './courses-page/pagination/pagination.component';
import { SetBorderDirective } from './directives/set-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ConfirmationDialogComponent } from './courses-page/single-course/confirmation-dialog/confirmation-dialog.component';
import { UserInfoComponent } from './auth/user-info/user-info.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    CoursesPageComponent,
    SearchComponent,
    AddCourseComponent,
    SingleCourseComponent,
    PaginationComponent,
    SetBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    ConfirmationDialogComponent,
    UserInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
