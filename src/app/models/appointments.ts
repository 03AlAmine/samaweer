export interface RendezVous {
  id?: string;
  patientId: string;
  medecinId: string;
  date: string;
  heure: string;
  statut: 'prévu' | 'terminé' | 'annulé';
}
