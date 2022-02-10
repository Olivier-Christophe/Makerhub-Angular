import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  fg!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(50)]]
    });
  }

  submit() {
    if(this.fg.valid) {
      this.httpClient.post('http://localhost:64880/api/category', this.fg.value)
        .subscribe(() => {
          this.router.navigateByUrl('/categories');
        });
    }
  }

}
