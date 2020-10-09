import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characterApi: string;

  constructor(
    private http: HttpClient
  ) {
    this.characterApi = '${environment.apiUrl}api/v1/characters';
  }

  getAllCharacters() {
    return this.http.get<any>('${this.characterApi}/index')
  }
}
