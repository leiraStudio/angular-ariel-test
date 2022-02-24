import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {
  Character,
  CommonViewState,
} from '../../../assets/characters.interface';

/**
 * Establece los valores iniciales del estado del CommonView.
 */
const createInitialState = (): CommonViewState => {
  return {
    characters: [],
    characterSelected: {
      char_id: 0,
      name: '',
      birthday: '',
      img: '',
      status: '',
      nickname: '',
    },
  };
};

/**
 * Clase para almacenar el estado de CommonView.
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'characters-view-store', resettable: true })
export class CommonViewStore extends Store<CommonViewState> {
  /**
   * Constructor
   */
  constructor() {
    // @ts-ignore
    super(createInitialState());
    this.setLoading(false);
  }

  updateCharacters(characters: Character[]) {
    this.update((state) => ({ ...state, characters: characters }));
  }
  updateCharacterSelected(character: Character) {
    this.update((state) => ({ ...state, characterSelected: character }));
  }
}
