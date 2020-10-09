export class Character {
  id: number
  characterName: string
  characterTitle: string
  identity: string
  backstory: string
  powersAndAbilities: string
  img: string

  constructor({
    id = null,
    characterName = '',
    characterTitle = '',
    identity = '',
    backstory = '',
    powersAndAbilities = '',
    img = '',
    ...rest
  }) {
    Object.assign(this, rest)
    this.id = id
    this.characterName = characterName
    this.characterTitle = characterTitle
    this.identity = identity
    this.backstory = backstory
    this.powersAndAbilities = powersAndAbilities
    this.img = img
  }
}
