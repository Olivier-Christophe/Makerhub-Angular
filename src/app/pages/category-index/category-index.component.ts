import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Sample } from 'src/app/models/sample.model';

@Component({
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.scss']
})
export class CategoryIndexComponent implements OnInit {

  categories: Category[] = [];
  samples?: Sample[] = [];
  

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:64880/api/category').subscribe(data => this.categories = data);
  }
  deleteCategory(id:number) : Observable<boolean>{
    return this.httpClient.delete<boolean>('http://localhost:64880/api/category/'+id)
  }

}
