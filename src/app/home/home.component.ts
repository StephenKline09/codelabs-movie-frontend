import { CharacterService } from './../shared/services/character.service';
import { Component, OnInit } from '@angular/core';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters: any[] = []
  constructor(
    private CharacterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.retrieveAllCharacters()
  }

  retrieveAllCharacters() {
    this.CharacterService.getAllCharacters().subscribe(data => {
      debugger
    })
  }

}
