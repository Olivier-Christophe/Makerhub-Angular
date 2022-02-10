import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sample } from 'src/app/models/sample.model';
import { SamplesService } from 'src/app/Service/samples/samples.service';



@Component({
  selector: 'app-sample-edition',
  templateUrl: './sample-edition.component.html',
  styleUrls: ['./sample-edition.component.scss']
})
export class SampleEditionComponent implements OnInit {

  term: string = '';
  fg!:FormGroup;
  keyword: string = '';
  

  samples: Sample[] = [];

  categories: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private _sampleService: SamplesService

  ) { }
  

  ngOnInit(): void {
  
    this.RefreshSamples()
  }
  
  RefreshSamples(){
    this._sampleService.GetAllSamples().subscribe(data => this.samples = data)
    //this.httpClient.get<any[]>('http://localhost:64880/api/sample').subscribe(data => this.samples = data);

  }

  modif(id:number): void {
    this.RefreshSamples()
    this.fg = this.formBuilder.group({
      auteur : [null, [Validators.required, Validators.min(2)]],
      titre : [null, [Validators.required, Validators.min(5), Validators.maxLength(50)]],
      categories: [null],
      url:[Validators.minLength(3)],

    });
  }
  deleteSample(id: number) {
    console.log(id);
    
    this._sampleService.deleteSample(id).subscribe(() =>
    this.RefreshSamples()
    )
  }

 
  
  submit()  {
    if(this.fg.valid) {
      this.httpClient.post('http://localhost:64880/api/sample',this.fg.value).subscribe(() =>
      {this.router.navigateByUrl('/samples');
    });
    }
}
getSamplesWithFilter() {
  return this.samples.filter(s => 
    s.titre.toLowerCase().startsWith(this.keyword.toLowerCase())
    || s.auteur.toLowerCase().startsWith(this.keyword.toLowerCase())
  )
}



}




