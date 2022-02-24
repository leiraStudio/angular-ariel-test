import { CommonViewStore } from './common-store.service';

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import {
  Character,
  CommonViewState,
} from '../../../assets/characters.interface';

/**
 * Clase para realizar consultas sobre el estado CommonView.
 */
@Injectable({ providedIn: 'root' })
export class CommonViewQuery extends Query<CommonViewState> {
  /**
   * Constructor
   * @param store
   */
  constructor(store: CommonViewStore) {
    super(store);
  }

  selectCharacters$ = (): Observable<Character[]> => {
    return this.select((state) => state.characters);
  };
  selectCharacterSelected$ = (): Observable<Character> => {
    return this.select((state) => state.characterSelected);
  };
}
