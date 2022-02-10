import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search! : string;
  resultats!: any[];

  constructor(private httpClient: HttpClient) {}
  

  ngOnInit(): void {
  }
  searchaction():void{
    this.httpClient.get<any[]>('https://itunes.apple.com/search?term=' + this.search)
    .subscribe(data => this.resultats = data)
  }

}
