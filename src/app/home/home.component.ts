import { CharacterService } from './../shared/services/character.service';
import { Character } from './../shared/models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters: Character[] = []
  constructor(
    private CharacterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.retrieveAllCharacters()
  }

  retrieveAllCharacters() {
    this.CharacterService.getAllCharacters().subscribe(characters => {
      if (characters) {
        this.characters = characters
      }
      debugger
    }, error=> {
      if (error) {
        console.log(error)
      }
    })
  }
}
