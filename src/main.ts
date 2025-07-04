import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { provideAuth, getAuth, setPersistence, browserLocalPersistence } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),

    // ✅ Initialisation de Firebase avec compat
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebase) // <= IMPORTANT
    ),

    provideAuth(() => {
      const auth = getAuth();
      setPersistence(auth, browserLocalPersistence); // ✅ persistance locale
      return auth;
    }),
    provideFirestore(() => getFirestore()),
  ]
});
