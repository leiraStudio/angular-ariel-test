import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonStateService } from '../+state/common/stateApp.service';
import { Character } from '../../assets/characters.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  apiUrl = 'http://localhost:3000/characters/';
  constructor(
    private http: HttpClient,
    private commonStateService: CommonStateService
  ) {}
  getCharacters(): void {
    this.http
      .get<any>(this.apiUrl)
      .subscribe((response) =>
        this.commonStateService.updateCharacters(response)
      );
  }
  getCharacterByID(id: any): void {
    console.log('id', id);
    this.http.get<any>(this.apiUrl).subscribe((response) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].char_id == id) {
          this.commonStateService.updateCharacterSelected(response[i]);
          break;
        }
      }
    });
  }
  createCharacter(character: Character): Observable<Character> {
    console.log(character);
    return this.http.post<Character>(this.apiUrl, character);
  }
  editCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(this.apiUrl, character);
  }
  deleteCharacter(id: any): any {
    return this.http.delete(this.apiUrl + id);
  }
}
