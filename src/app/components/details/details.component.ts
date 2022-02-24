import { Component, NgZone, OnInit } from '@angular/core';
import { CommonStateService } from '../../+state/common/stateApp.service';
import { Character } from '../../../assets/characters.interface';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  charactedSelected: Character = {
    char_id: 4,
    name: '',
    birthday: '',
    img: '',
    status: '',
    nickname: '',
  };
  loading = false;
  constructor(
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private commonStateService: CommonStateService,
    private CharactersService: CharactersService
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.CharactersService.getCharacterByID(id);
    this.commonStateService.characterSelected$.subscribe((data) => {
      this.charactedSelected = data;
      console.log(data);
    });
  }
  remove(char: any) {
    console.log(2);
    this.CharactersService.deleteCharacter(char.char_id).subscribe(() => {
      this.router.navigateByUrl('/list');
    });
  }
}
