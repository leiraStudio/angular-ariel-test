import { Component, OnInit } from '@angular/core';
import { CommonStateService } from '../../+state/common/stateApp.service';
import { Character } from '../../../assets/characters.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characters: Character[] = [];
  constructor(private commonStateService: CommonStateService) {}

  ngOnInit(): void {
    this.commonStateService.characters.subscribe((response) => {
      this.characters = response;
    });
  }
}
