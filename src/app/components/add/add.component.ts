import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharactersService } from '../../services/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  characterForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      status: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      img: ['', [Validators.required]],
    });
  }
  /* Submit book */
  submitCharacterForm() {
    if (this.characterForm.valid) {
      this.charactersService
        .createCharacter(this.characterForm.value)
        .subscribe((res) => {
          this.router.navigateByUrl('/list');
        });
    }
  }
  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.characterForm.controls[controlName].hasError(errorName);
  };
}
