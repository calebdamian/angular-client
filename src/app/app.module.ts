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
import { ClhistListComponent } from './clinicalHistory/list/clhist-list.component';
import { EditClhistComponent } from './clinicalHistory/edit/edit-clhist.component';
import { NewClhistComponent } from './clinicalHistory/new/new-clhist.component';
import { DetailClhistComponent } from './clinicalHistory/detail/detail-clhist.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    NewPatientComponent,
    EditPatientComponent,
    DetailPatientComponent,
    ClhistListComponent,
    EditClhistComponent,
    NewClhistComponent,
    DetailClhistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
