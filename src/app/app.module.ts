import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatDividerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactCreateComponent} from './contact-create/contact-create.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';


const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    data: { title: 'Edit Contact' }
  },
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatDividerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
