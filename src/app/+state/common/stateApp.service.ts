import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonViewQuery } from 'src/app/+state/common/common-query.service';

import { Character } from '../../../assets/characters.interface';
import { CommonViewStore } from './common-store.service';

/**
 * Servicio para el manejo común del estado de la applicacion.
 */
@Injectable({
  providedIn: 'root',
})
export class CommonStateService {
  characters: Observable<Character[]>;
  characterSelected$: Observable<Character>;
  /**
   * Constructor
   *
   * @param commonViewStore Store del CommonView.
   * @param commonViewQuery Query del CommonView.
   */
  constructor(
    private readonly commonViewStore: CommonViewStore,
    private readonly commonViewQuery: CommonViewQuery
  ) {
    this.characters = this.commonViewQuery.selectCharacters$();
    this.characterSelected$ = this.commonViewQuery.selectCharacterSelected$();
  }

  updateCharacters(characters: Character[]) {
    this.commonViewStore.updateCharacters(characters);
  }
  updateCharacterSelected(characters: Character) {
    this.commonViewStore.updateCharacterSelected(characters);
  }
}
