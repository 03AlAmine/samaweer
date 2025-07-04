import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  @Input() isOpen = true;

  // Injection explicite du Router
  constructor(public router: Router) {}

  menuItems = [
    {
      path: '/dashboard',
      icon: 'dashboard',
      label: 'Tableau de bord',
      exact: true
    },
  {
    path: '/dashboard/patients',
    icon: 'people',
    label: 'Patients',
    exact: false, // Défini explicitement
    children: [
      { path: '/dashboard/patients', label: 'Liste des patients' },
      { path: '/dashboard/patients/add', label: 'Ajouter un patient' }
    ]
  },
    {
      path: '/dashboard/medecins',
      icon: 'medical_services',
      label: 'Médecins',
          exact: false, // Défini explicitement

      children: [
        { path: '/dashboard/medecins', label: 'Liste des médecins' },
        { path: '/dashboard/medecins/add', label: 'Ajouter un médecin' }
      ]
    },
    {
      path: '/dashboard/rendezvous',
      icon: 'calendar_today',
      label: 'Rendez-vous',
          exact: false, // Défini explicitement

      children: [
        { path: '/dashboard/rendezvous', label: 'Liste des RDV' },
        { path: '/dashboard/rendezvous/add', label: 'Prendre RDV' },
        { path: '/dashboard/rendezvous/calendrier', label: 'Calendrier' }
      ]
    }
  ];

  isActive(parentPath: string, currentPath: string): boolean {
    return currentPath.startsWith(parentPath);
  }
}
