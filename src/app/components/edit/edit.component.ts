import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { CommonStateService } from '../../+state/common/stateApp.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  characterForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
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
      this.characterForm = this.fb.group({
        name: [data.name, [Validators.required]],
        birthday: [data.birthday, [Validators.required]],
        status: [data.status, [Validators.required]],
        nickname: [data.nickname, [Validators.required]],
        img: [data.img, [Validators.required]],
      });
    });
  }
  /* Submit book */
  submitCharacterForm() {
    if (this.characterForm.valid) {
      // this.projectApi.createProject(this.projectForm.value).subscribe((res) => {
      //   this.router.navigateByUrl('/list');
      // });
    }
  }
  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.characterForm.controls[controlName].hasError(errorName);
  };
}
