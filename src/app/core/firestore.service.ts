import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Patient } from '../models/patient';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private firestore = inject(Firestore);

  addPatient(patient: Patient) {
    const patientsRef = collection(this.firestore, 'patients');
    return addDoc(patientsRef, patient);
  }

  getPatients() {
    const patientsRef = collection(this.firestore, 'patients');
    return collectionData(patientsRef, { idField: 'id' });
  }
}
