export class Character {
  id: number
  name: string
  title: string
  identity: string
  backstory: string
  powers: string
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
    this.name = characterName
    this.title = characterTitle
    this.identity = identity
    this.backstory = backstory
    this.powers = powersAndAbilities
    this.img = img
  }
}
