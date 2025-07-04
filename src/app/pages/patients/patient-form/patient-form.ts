import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../core/patient.service';
import { Patient } from '../../../models/patient';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-patient-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, CardModule],
  templateUrl: './patient-form.html',
  styleUrls: ['./patient-form.css']
})
export class PatientFormComponent implements OnInit {
  patient: Patient = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: ''
  };
  isEdit = false;
  loading = false;

  constructor(
    private patientService: PatientService,
  public router: Router,  // <-- changer ici
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.loadPatient(id);
    }
  }

  loadPatient(id: string) {
    this.loading = true;
    // Implémentez la méthode getPatient dans votre service
    this.patientService.getPatient(id).subscribe({
      next: (patient) => {
        this.patient = patient;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  onSubmit() {
    this.loading = true;
    if (this.isEdit) {
      this.patientService.updatePatient(this.patient.id!, this.patient)
        .then(() => this.router.navigate(['/dashboard/patients']))
        .catch(err => console.error(err))
        .finally(() => this.loading = false);
    } else {
      this.patientService.createPatient(this.patient)
        .then(() => this.router.navigate(['/dashboard/patients']))
        .catch(err => console.error(err))
        .finally(() => this.loading = false);
    }
  }
}
