import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css'],
})
export class DetailPatientComponent implements OnInit {
  patient: any = null;
  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.patientService.detail(id).subscribe(
      (data) => {
        this.patient = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
