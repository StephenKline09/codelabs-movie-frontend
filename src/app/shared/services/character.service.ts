
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}

  list(): Observable<Array<UserModel>> {
    return this.http.get('/api/users')
    .map(res => res.json())
  }
}
