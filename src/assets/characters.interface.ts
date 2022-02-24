export interface Character {
  char_id: number;
  name: String;
  birthday: String;
  img: String;
  status: String;
  nickname: String;
}
export interface CommonViewState {
  characters: Character[];
  characterSelected: Character;
}
