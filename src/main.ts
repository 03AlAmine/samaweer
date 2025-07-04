import { bootstrapApplication } from '@angular/platform-browser';
import { App} from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';

import { browserLocalPersistence, setPersistence, getAuth,provideAuth } from '@angular/fire/auth';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      setPersistence(auth, browserLocalPersistence); // ✅ persistance locale
      return auth;
    }),
    provideFirestore(() => getFirestore()),
  ]
});
