import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from '../models/patient';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private firestore: AngularFirestore) {}


    getPatients() {
    return this.firestore.collection<Patient>('patients').snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Patient;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
  getPatient(id: string) {
    return this.firestore
      .doc<Patient>(`patients/${id}`)
      .snapshotChanges()
      .pipe(
        map((action) => {
          const data = action.payload.data();
          if (data) {
            const patient: Patient = { id, ...data };
            return patient;
          } else {
            throw new Error('Patient non trouvé');
          }
        })
      );
  }

  createPatient(patient: Patient) {
    return this.firestore.collection('patients').add(patient);
  }

  updatePatient(id: string, patient: Partial<Patient>) {
    return this.firestore.doc(`patients/${id}`).update(patient);
  }

  deletePatient(id: string) {
    return this.firestore.doc(`patients/${id}`).delete();
  }
}
