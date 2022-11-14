import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patients: Array<Patient> | Patient[] | undefined;

  listaVacia = undefined;
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }
  loadPatients(): void {
    this.patientService.lista().subscribe(
      (data) => {
        this.patients = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  remove(id: number | undefined): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Eliminar paciente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sip',
      cancelButtonText: 'Nops',
    }).then((result) => {
      if (result.value) {
        this.patientService.delete(id).subscribe((res) => this.loadPatients());
        Swal.fire('OK', 'Paciente eliminado', 'success');
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Paciente no eliminado', 'error');
      }
    });
  }
}
