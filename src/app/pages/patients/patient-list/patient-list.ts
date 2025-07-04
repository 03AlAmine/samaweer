import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PatientService } from '../../../core/patient.service';
import { Patient } from '../../../models/patient';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-patient-list',
  imports: [CommonModule, RouterModule, TableModule, ButtonModule],
  templateUrl: './patient-list.html',
  styleUrls: ['./patient-list.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  loading = true;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.loadPatients();
  }

loadPatients() {
  this.patientService.getPatients().subscribe({
    next: (patients) => {
      this.patients = patients;
      this.loading = false;
    },
    error: (err) => {
      console.error(err);
      this.loading = false;
    }
  });
}


  deletePatient(id: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce patient ?')) {
      this.patientService.deletePatient(id).then(() => {
        this.loadPatients();
      });
    }
  }
}
