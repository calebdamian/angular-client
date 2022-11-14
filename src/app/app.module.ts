import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PatientListComponent } from './patient/patient-list.component';
import { NewPatientComponent } from './patient/new-patient.component';
import { EditPatientComponent } from './patient/edit-patient.component';
import { DetailPatientComponent } from './patient/detail-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    NewPatientComponent,
    EditPatientComponent,
    DetailPatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
