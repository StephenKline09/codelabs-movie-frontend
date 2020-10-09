import { Character } from './../../shared/models/character';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit, OnChanges {
  @Input() character: Character
  characterImage: string
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.character) {
      this.characterImage = this.character.img
    }
  }

  setDefaultPic() {
    this.characterImage = 'assets/images/pageNotFound.jpg'
  }

}
