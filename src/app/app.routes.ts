import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { authGuard } from './guards/auth-guard';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { PatientListComponent } from './pages/patients/patient-list/patient-list';
import { PatientFormComponent } from './pages/patients/patient-form/patient-form';
/*import { MedecinFormComponent } from './pages/medecins/medecin-form/medecin-form';
import { MedecinListComponent } from './pages/medecins/medecin-list/medecin-list';
import { MedecinDetailsComponent } from './pages/medecins/medecin-details/medecin-details';
import { RendezVousListComponent } from './pages/appointements/appointements-list/appointements-list';
import { RendezVousFormComponent } from './pages/appointements/appointements-form/appointements-form';
import { CalendrierComponent } from './pages/calendrier/calendrier'; */



export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      // Patients
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/add', component: PatientFormComponent },
      { path: 'patients/edit/:id', component: PatientFormComponent },
     /* { path: 'patients/:id', component: PatientDetailsComponent },

      // Médecins
      { path: 'medecins', component: MedecinListComponent },
      { path: 'medecins/add', component: MedecinFormComponent },
      { path: 'medecins/edit/:id', component: MedecinFormComponent },
      { path: 'medecins/:id', component: MedecinDetailsComponent },

      // Rendez-vous
      { path: 'rendezvous', component: RendezVousListComponent },
      { path: 'rendezvous/add', component: RendezVousFormComponent },
      { path: 'rendezvous/edit/:id', component: RendezVousFormComponent },
      { path: 'rendezvous/calendrier', component: CalendrierComponent }*/
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
