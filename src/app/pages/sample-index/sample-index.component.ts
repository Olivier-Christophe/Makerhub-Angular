import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MatTableDataSource} from '@angular/material/table';
import { SamplesService } from 'src/app/Service/samples/samples.service';

@Component({
  templateUrl: './sample-index.component.html',
  styleUrls: ['./sample-index.component.scss']
})
export class SampleIndexComponent implements OnInit {

  term: string = '';

  samples: any[] = [];

  keyword: string = '';

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private _sampleService: SamplesService
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:64880/api/sample').subscribe(data => this.samples = data);
  }

  // delete(id :number) {
  //   this.httpClient.delete('http://localhost:64880/api/sample/' + id).subscribe(() =>
  //     this.httpClient.get<any[]>('http://localhost:64880/api/sample').subscribe(data => this.samples = data)
  //   )
 // }

  play(){  this.httpClient.get('http://localhost:64880/api/sample' + this.term).subscribe(console.log)
}

  getSamplesWithFilter() {
    return this.samples.filter(s => 
      s.titre.toLowerCase().startsWith(this.keyword.toLowerCase())
      || s.auteur.toLowerCase().startsWith(this.keyword.toLowerCase())
    )
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

RefreshSamples(){
    this._sampleService.GetAllSamples().subscribe(data => this.samples = data)
    //this.httpClient.get<any[]>('http://localhost:64880/api/sample').subscribe(data => this.samples = data);

  }
deleteSample(id: number) {
  console.log(id);
  
  this._sampleService.deleteSample(id).subscribe(() =>
  this.RefreshSamples()
  )
}

}



