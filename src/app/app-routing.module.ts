import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPatientComponent } from './patient/detail-patient.component';
import { EditPatientComponent } from './patient/edit-patient.component';
import { NewPatientComponent } from './patient/new-patient.component';
import { PatientListComponent } from './patient/patient-list.component';

const routes: Routes = [
  { path: '', component: PatientListComponent },
  { path: 'detalle/:id', component: DetailPatientComponent },
  { path: 'nuevo', component: NewPatientComponent },
  { path: 'editar/:id', component: EditPatientComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
