import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private HttpClient = inject(HttpClient);
  private domain = environment.domain;

  sendUserData(userData: User): Observable<User> {
    return this.HttpClient.post<User>(`${this.domain}`, userData);
  }
}
