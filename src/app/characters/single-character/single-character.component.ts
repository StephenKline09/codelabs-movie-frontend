import { Subscription } from 'rxjs';
import { Character } from './../../shared/models/character';
import { CharacterService } from 'src/app/shared/services/character.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit, OnDestroy {
  character: Character
  reviews: any[]
  private subs= new Subscription()

  constructor(
    private route: ActivatedRoute,
    private CharacterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(character => {
      if (character && character.id) {
        this.retrieveCharacterById(character.id)
      }
    })
  }

  retrieveCharacterById(id: number) {
    const params = { id: id }
    this.subs.add (
      this.CharacterService.getCharacterById(params).subscribe(data => {
        debugger
      }, error => {
        if (error) {
          console.log(error)
        }
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
