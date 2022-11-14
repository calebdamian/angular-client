import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css'],
})
export class NewPatientComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  nombres = '';

  apellidos = '';

  email = '';

  fecha_nac: Date = new Date();

  num_contacto = '';

  num_id = '';

  adminId: number = 1;

  ngOnInit(): void {}
  onCreate(): void {
    const patient = new Patient(
      this.nombres,
      this.apellidos,
      this.email,
      this.num_contacto,
      this.fecha_nac,
      this.num_id
    );
    this.patientService.save(patient).subscribe(
      (data) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
