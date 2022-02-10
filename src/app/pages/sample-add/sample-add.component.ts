import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sample-add',
  templateUrl: './sample-add.component.html',
  styleUrls: ['./sample-add.component.scss']
})
export class SampleAddComponent implements OnInit {

  fg!: FormGroup;
  categories: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:64880/api/category').subscribe(data => this.categories = data);
    this.fg = this.formBuilder.group({
      auteur : [null ],
      titre : [null, [Validators.required, Validators.min(2), Validators.maxLength(50)]],
      bytes: [null],
      mimeType: [null],
      categories: [null]
    });
  }

  // transform fle fichier en bytes
  tranformToBytes(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      let blob = e.target?.result;
      //rajoute les bytes dans le formulaire
      this.fg.get('bytes')?.setValue((<string>blob).split(',')[1]);
      this.fg.get('mimeType')?.setValue((<string>blob).split(',')[0].replace(';base64', ''));
    }
  }

  submit()  {
    if(this.fg.valid) {
      this.httpClient.post('http://localhost:64880/api/sample',this.fg.value).subscribe(() =>
      {this.router.navigateByUrl('/samples');
    });
    }
  }

}
