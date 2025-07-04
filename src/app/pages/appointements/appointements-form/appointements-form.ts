/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RendezVousService } from '../../../core/rendezvous.service';
import { PatientService } from '../../../core/patient.service';
import { MedecinService } from '../../../core/medecin.service';
import { RendezVous } from '../../../shared/models/rendezvous.model';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  selector: 'app-rendezvous-form',
  imports: [CommonModule, FormsModule, CalendarModule, DropdownModule, InputTextModule],
  templateUrl: './rendezvous-form.component.html',
  styleUrls: ['./rendezvous-form.component.css']
})
export class RendezVousFormComponent implements OnInit {
  rendezVous: RendezVous = {
    patientId: '',
    medecinId: '',
    date: '',
    heure: '',
    statut: 'prévu'
  };
  patients: any[] = [];
  medecins: any[] = [];
  loading = false;

  constructor(
    private rendezVousService: RendezVousService,
    private patientService: PatientService,
    private medecinService: MedecinService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPatients();
    this.loadMedecins();
  }

  loadPatients() {
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients.map(p => ({ label: `${p.prenom} ${p.nom}`, value: p.id }));
    });
  }

  loadMedecins() {
    this.medecinService.getMedecins().subscribe(medecins => {
      this.medecins = medecins.map(m => ({ label: `Dr. ${m.prenom} ${m.nom}`, value: m.id }));
    });
  }

  onSubmit() {
    this.loading = true;
    this.rendezVousService.createRendezVous(this.rendezVous)
      .then(() => this.router.navigate(['/dashboard/rendezvous']))
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
}
*/
