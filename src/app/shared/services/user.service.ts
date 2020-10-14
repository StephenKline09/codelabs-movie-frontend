import { LocalStorageService } from './local-storage.service';
import { User } from './../models/user';
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>
  private userApi: string

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService
  ) {
    this.userApi = `${environment.baseUrl}api/v1/users`
    this.currentUserSubject = new BehaviorSubject<User>(this.storage.getItem('currentUser'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

public get currentUserValue(): User {
  return this.currentUserSubject.value  //returns the currentUser value to a component
}

setCurrentUser(user: User) {
  this.currentUserSubject.next(user)   // sets the currentUserSubject
}

login() {}

signup() {}

logout() {}

}
