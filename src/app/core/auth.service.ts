import { Injectable, inject, PLATFORM_ID, Inject, computed, signal } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { isPlatformServer } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { user } from 'rxfire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth | null;
  private isSSR: boolean;

  // Signal pour l'utilisateur courant (côté client uniquement)
  currentUser = signal<User | null>(null);

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isSSR = isPlatformServer(platformId);
    if (!this.isSSR) {
      try {
        this.auth = inject(Auth);
        user(this.auth).subscribe(u => this.currentUser.set(u));
      } catch {
        this.auth = null;
      }
    } else {
      this.auth = null;
    }
  }

  login(email: string, password: string) {
    if (!this.auth) return Promise.reject('Firebase Auth non disponible côté serveur');
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    if (!this.auth) return Promise.reject('Firebase Auth non disponible côté serveur');
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    if (!this.auth) return Promise.reject('Firebase Auth non disponible côté serveur');
    return signOut(this.auth);
  }

  getUser() {
    return this.currentUser.asReadonly(); // retourne un signal lisible
  }
}
