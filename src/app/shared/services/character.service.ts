import { Character } from './../models/character';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characterApi: string;

  baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {
    this.characterApi = `${environment.baseUrl}api/v1/characters`;
  }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}characters/index`)
  }
}
